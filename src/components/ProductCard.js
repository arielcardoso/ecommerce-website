import React from 'react';
import {Link} from 'react-router-dom'
import LineIcon from 'react-lineicons';

const ProductCard = (props) => {
  return (
    <Link to={`product/${props.item.sku}`} id={props.index} className='product-item' >
      <img src={props.item.image} alt={props.item.name}/>
      <div className="likes">
        <LineIcon name='heart-filled' />
        {props.item.likes}
      </div>
      <div className="title">{props.item.name}</div>
      <div className="price"><small>CAD</small> {props.item.price}</div>
    </Link>
  )
}

export default ProductCard;