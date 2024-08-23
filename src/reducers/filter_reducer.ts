import {
  LOAD_PRODUCTS,
  SET_LIST_VIEW,
  SET_GRID_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  HANDLE_CLICK_FROM_SERVICES,
  RESET_IS_CLICK_FROM_SERVICES,
} from '../utils/Actions'
import { initialStateType } from '../context/filter_context'
import { productDataType } from '../utils/ProductData'

const filter_reducer = (
  state: initialStateType,
  action: { type: any; payload?: any }
) => {
  if (action.type === LOAD_PRODUCTS) {
    const maxPrice = Math.max(
      ...action.payload.map((item: productDataType) => item.price)
    )

    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: { ...state.filters, maxPrice, price: maxPrice },
    }
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, gridView: true }
  }
  if (action.type === SET_LIST_VIEW) {
    return { ...state, gridView: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    let tempProducts = [...state.filteredProducts]
    if (state.sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price)
    }
    if (state.sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }
    if (state.sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.productName.localeCompare(b.productName)
      })
    }
    if (state.sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.productName.localeCompare(a.productName)
      })
    }
    return { ...state, filteredProducts: tempProducts }
  }
  if (action.type === UPDATE_FILTERS) {
    let { name, value, checked } = action.payload
    let { age } = state.filters
    
    if (name === 'bestSellerOnly' || name === 'onlyInStock') {
      value = checked
    }
    if (name === 'age') {
      if (checked) {
        // console.log('a box is just checked')
        age.push(value)
        // console.log(age)
        value = age
        // console.log(value)
      }
      if (!checked) {
        // console.log('a box is UNCHECKED')
        age = age.filter(ageValue => ageValue !== value)
        value = age
        // console.log(value)
      }
    }
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state
    const {
      searchTerm,
      cateId,
      price,
      onlyInStock,
      bestSellerOnly,
      rating,
      age: ageFilters,
    } = state.filters

    let tempProducts = [...allProducts]
    // filter by searchTerm
    if (searchTerm) {
      tempProducts = tempProducts.filter(product => {
        // console.log(product)
        return (
          product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.productDescription.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
    }

    // category
    if (cateId !== 'all') {
      tempProducts = tempProducts.filter(product => {
        return product.categrory.toString() === cateId
      })
    }
    // bestSellerOnly
    if (bestSellerOnly) {
      tempProducts = tempProducts.filter(product => {
        return product.best_seller === bestSellerOnly
      })
    }
    if (rating) {
      if (rating === "4STARSABOVE") {
        tempProducts = tempProducts.filter(product => {
          return product.rating >= 4
        })
      }
      if (rating === "3STARSABOVE") {
        tempProducts = tempProducts.filter(product => {
          return product.rating >= 3
        })
      }
      if (rating === "2STARSABOVE") {
        tempProducts = tempProducts.filter(product => {
          return product.rating >= 2
        })
      }
      if (rating === "1STARSABOVE") {
        tempProducts = tempProducts.filter(product => {
          return product.rating >= 1
        })
      }
    }

    // onlyInStock
    if (onlyInStock) {
      tempProducts = tempProducts.filter(product => {
        return product.in_stock === onlyInStock
      })
    }

    //   // age
    //   if (ageFilters.length > 0) {
    //     // console.log('there is something in the age array');

    //     tempProducts = tempProducts.filter(tempProduct => {
    //       const { age: productAgeArray } = tempProduct
    //       // needs to return ONE true/ false value here
    //       return ageFilters
    //         .map(ageFilter => productAgeArray?.includes(ageFilter))
    //         .every(value => Boolean(value))

    //       // see every step with following lines
    //       // const boolArray = ageFilters.map(ageFilter => {
    //       //   return productAgeArray?.includes(ageFilter)
    //       // })
    //       // console.log(boolArray)
    //       // console.log(boolArray.every(value => Boolean(value)))

    //       // return boolArray.every(value => Boolean(value))
    //     })
    //     // console.log(tempProducts)
    //   }

    // price
    if (price !== 0) {
      tempProducts = tempProducts.filter(product => {
        return product.price <= price
      })
    }

    return { ...state, filteredProducts: tempProducts }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        searchTerm: '',
        cateId: 'all',
        minPrice: 0,
        maxPrice: 0,
        price: 0,
        age: [],
        onlyInStock: false,
        bestSellerOnly: false,
        rating: ''
      },
    }
  }
  if (action.type === HANDLE_CLICK_FROM_SERVICES) {
    return { ...state, isClickFromServices: true }
  }
  if (action.type === RESET_IS_CLICK_FROM_SERVICES) {
    return { ...state, isClickFromServices: false }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
