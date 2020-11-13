import React from 'react'
import {Link} from 'react-router-dom'
import listItem from '../utils/ProductList'

const Products = () => {
  return (
    <>
      <div className="page-header">
        <div className='container'>
          <h1>Products Page</h1>
        </div>
      </div>

      <div className='container'>
        <div className='product-list'>
          {listItem.map((item, index) => (
            <Link to={`product/${item.sku}`} id={index} className='product-item' >
              <img src={item.image} alt={item.name}/>
              <div className="title">{item.name}</div>
              <div className="price"><small>CAD</small> {item.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default Products;
