import React from 'react'
import { Link, Redirect } from 'react-router-dom';

import ReactDOM from 'react-dom';
import LineIcon from 'react-lineicons';

import listItem from '../utils/ProductList'

const ProductPage = () => {
  //let id = props.match.params.id;
  let id = 101;

  if (isNaN(id)) {
    return(
      <Redirect to="/products"></Redirect>
    ) 
  }

  return (
    <>
      <div className="page-header">
        <div className='container'>
          <h1>Product Page</h1>
        </div>
      </div>
      <div className='container'>
        {listItem.filter(prod => prod.sku === id).map((item, index) => (
          <div id={index} className='product-info' >
            <img src={item.image} alt={item.name}/>
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
        ))}
      </div>
    </>
  )
}
export default ProductPage;
