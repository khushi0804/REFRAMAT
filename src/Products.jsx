import React from 'react'
import { useGlobalContext } from './context'

const Products = () => {
  const {products} = useGlobalContext();
  console.log(products)
  return (
    <div>Products</div>
  )
}

export default Products