import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import LineIcon from 'react-lineicons';

import ProductList from '../utils/ProductList'

const ProductPage = (props) => {
  let id = props.match.params.id;
  //let id = 101;

  if (isNaN(id)) {
    return(
      <Redirect to="/products"></Redirect>
    ) 
  }
  const item = ProductList.find(p => p.sku === parseInt(id));

  return (
    <>
      <div className="page-header">
        <div className='container'>
          <h1>Product</h1>
        </div>
      </div>
      <div className='container'>
        <div className='product-info' >
          <div className="image">
            <img src={item.image} alt={item.name}/>
            <div className="likes">
                <LineIcon name='heart-filled' />
                {item.likes}
            </div>
          </div>
          <div className="content">
            <p className="sku">SKU: {item.sku}</p>
            <div className="title">{item.name}</div>
            <div className="price"><small>CAD</small> {item.price}</div>
            <Link to='/' className='button' >
              <LineIcon name='cart' size="lg" />
              ORDER NOW
            </Link>
            <div>
              <Link to='/products' >Back to products</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductPage;
