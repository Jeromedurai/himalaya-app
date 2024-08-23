import React, { useEffect, useContext, useReducer, ReactElement } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  HANDLE_CLICK_FROM_SERVICES,
  RESET_IS_CLICK_FROM_SERVICES,
} from '../utils/Actions'
import { useProductsContext } from './products_context'
import { productDataType } from '../utils/ProductData'

type filtersType = {
  searchTerm: string
  cateId: string
  minPrice: number
  maxPrice: number
  price: number
  age: string[]
  onlyInStock: boolean
  bestSellerOnly: boolean
  rating: string
}

export const defaultFilters: filtersType = {
  searchTerm: '',
  cateId: 'all',
  minPrice: 0,
  maxPrice: 0,
  price: 0,
  age: [],
  onlyInStock: false,
  bestSellerOnly: false,
  rating: ''
}

export type initialStateType = {
  filteredProducts: productDataType[]
  allProducts: productDataType[]
  gridView: boolean
  setGridView: () => void
  setListView: () => void
  sort: string
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void
  filters: filtersType
  updateFilters: (e: any) => void
  clearFilters: () => void
  isClickFromServices: boolean
  handleClickFromServices: () => void
  resetIsClickFromServices: () => void
}

const initialState: initialStateType = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  setGridView: () => { },
  setListView: () => { },
  sort: 'price-lowest',
  updateSort: () => { },
  filters: defaultFilters,
  updateFilters: () => { },
  clearFilters: () => { },
  isClickFromServices: false,
  handleClickFromServices: () => { },
  resetIsClickFromServices: () => { },
}

const ProductFilterContext = React.createContext<initialStateType>(initialState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductFilterProvider = ({ children }: ChildrenType): ReactElement => {
  const { allProducts } = useProductsContext()

  const [state, dispatch] = useReducer(reducer, initialState)

  // to load the full list of product when app starts
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: allProducts })
  }, [allProducts])

  // to sort and filter products when the sort value has changed
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [allProducts, state.sort, state.filters])

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW })
  }
  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    debugger
    dispatch({ type: UPDATE_SORT, payload: e.target.value })
  }
  const updateFilters = (e: any) => {
    debugger
    // need to figure out what to do with the event type here
    let name = e.target.name
    let value = e.target.value
    let type = e.target.type
    // only checkbox has e.target.checked prop, so only init checked variable here
    let checked

    if (type === 'category') {
      value = e.target.type
    }
    if (name === 'home-page-category') {
      name = 'category'
    }
    if (name === 'price') {
      value = Number(value)
    }
    debugger
    if (name === 'age' || name === 'bestSellerOnly' || name === 'onlyInStock') {
      checked = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value, checked } })
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  const handleClickFromServices = () => {
    dispatch({ type: HANDLE_CLICK_FROM_SERVICES })
  }

  const resetIsClickFromServices = () => {
    dispatch({ type: RESET_IS_CLICK_FROM_SERVICES })
  }

  return (
    <ProductFilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
        handleClickFromServices,
        resetIsClickFromServices,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  )
}

export const useProductFilterContext = () => {
  return useContext(ProductFilterContext)
}
