import React, { ReactElement, useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../reducers/products_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../utils/Actions'
import { productDataType } from '../utils/ProductData'
import axios from 'axios'
import { API_ENDPOINT, QUERY } from '../utils/constants'
import { useProductMasterQuery } from '../hooks/useProductMasterQuery'
import { useProductMaster } from '../hooks/useProductMaster'

export interface IProductFilter {
  bestSellerOnly: boolean;
  onlyInStock: boolean;
  rating: string;
  categoryId: number;
  orderBy: string;
  search: string;
}

export type initialStateType = {
  isSidebarOpen: boolean
  allProducts: productDataType[] | []
  featuredProducts: productDataType[] | []
  singleProduct: productDataType | {}
  openSidebar: () => void
  closeSidebar: () => void
  fetchSingleProduct: (id: string) => void
  productsLoading: boolean
  productsError: boolean
  singleProductLoading: boolean
  singleProductError: boolean
}

const initialState: initialStateType = {
  isSidebarOpen: false,
  allProducts: [],
  featuredProducts: [],
  singleProduct: {},
  openSidebar: () => { },
  closeSidebar: () => { },
  fetchSingleProduct: (id: string) => { },
  productsLoading: false,
  productsError: false,
  singleProductLoading: false,
  singleProductError: false,
}

export const DEFAULT_NOTIFICATION_INPUT: IProductFilter = {
  bestSellerOnly: false,
  onlyInStock: false,
  rating: "",
  categoryId: 0,
  orderBy: "",
  search: ""
}

const ProductContext = React.createContext<initialStateType>(initialState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  // export const ProductsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { data, isLoading, refetch } = useProductMasterQuery()

  const [productPayload, setproductPayload] = useState(
    DEFAULT_NOTIFICATION_INPUT
  )

  // const data = useProductMaster({
  //   notificationPayload: productPayload
  // })

  const openSidebar = () => {
    debugger
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    debugger
    dispatch({ type: SIDEBAR_CLOSE })
  }

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: GET_PRODUCTS_BEGIN })
      try {
        data && dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data })
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  const fetchSingleProduct = (slug: string) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      // const singleProduct: productDataType = state.allProducts.filter(
      //   (product: productDataType) => product.slug === slug
      // )[0]
      // // running filter() on empty allProducts [] will result in undefined
      // // this if clause guard against such case
      // if (singleProduct) {
      //   dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
      // }
    } catch (error) {
      console.log(error)
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }


  return (
    <ProductContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
