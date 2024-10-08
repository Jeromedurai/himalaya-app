import { GiClothes } from 'react-icons/gi'
import { MdOutlineSmartToy } from 'react-icons/md'
import { FaBaby } from 'react-icons/fa'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'shipping',
    url: '/shipping',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const API_ENDPOINT =
  'https://bqk6gkzk.api.sanity.io/v1/graphql/production/default'

export const QUERY = `
{
  allProduct {
    _id
    name
    slug {
      current
    }
    brand
    categories {
      categories
    }
    clothingCategories {
      clothingCategories
    }
    price
    stock
    forWhom {
      forWhom
    }
    height {
      height
    }
    heightDescription
    age {
      age
    }
    ageDescription
    itemDescription
    featured
    images {
      asset {
        url
      }
    }
  }
}

`
