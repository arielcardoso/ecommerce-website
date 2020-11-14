import React from 'react'
import {Link} from 'react-router-dom'
import listItem from '../utils/ProductList'

const Home = () => {
  return (
    <>
      <div className="hero-slider">
        <div className='container'>
          <h1>
            WORLD-FAMOUS
            <span className="big">DELICIOUSLY</span>
            <span className="huge">PIES</span>
          </h1>
        </div>
      </div>

      <div className='container'>
        <h1 style={{textAlign:'center', fontWeight:'400', margin: '3rem 0'}} >Premium pies for all moments</h1>
        <div className='product-list home-list'>
          {listItem.filter((item) => item.price >= 25 ).map((item, index) => (
            <Link to={`product/${item.sku}`} id={index} className='product-item' >
              <img src={item.image} alt={item.name}/>
              <div className="title">{item.name}</div>
              <div className="price"><small>CAD</small> {item.price}</div>
            </Link>
          ))}
        </div>
        <div>
          <Link to='/products' style={{display:'block', textAlign:'center', margin: '3rem 0'}} >See all Pies</Link>
        </div>
      </div>
    </>
  )
}
export default Home;