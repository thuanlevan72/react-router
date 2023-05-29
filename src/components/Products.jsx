import React from 'react'
import "../Product.css";
import data from '../data';
import { Link } from 'react-router-dom';
function Products() {
  return (
    <div className='box-product'>
      {data.map((item,index) =>{
        return (<div>
          <h3>{item.name}</h3>
          <Link to={`${item.id}`}>  <img src={item.image} alt="" /></Link>
          <p>{item.price}</p>
          <b>{item.title}</b>
        </div>)
      })}
    </div>
  )
}

export default Products