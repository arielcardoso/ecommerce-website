import React from 'react'
import listItem from '../utils/ProductList'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <>
      <div className="page-header">
        <div className='container'>
          <h1>Products</h1>
        </div>
      </div>

      <div className='container'>
        <div className='product-list'>
          {listItem.map((item, index) => (
            <ProductCard index={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Products;
