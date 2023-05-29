import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data';
import "../ProductDetail.css";
import { useEffect } from 'react';
function ProductDetail() {
  const {id} = useParams();
  const [Product,setProduct] = useState({
    id: -1,
    name: "test",
    image: "test",
    price: "123",
    title:"test"
  });
  useEffect(()=>{
    setProduct(data.filter(x=>x.id == id)[[0]]);
  },[]);
  return (
   <div>
          <h3>{Product.name}</h3>
          <img src={Product.image} alt="" />
          <p>{Product.price}</p>
          <b>{Product.title}</b>
        </div>

  )
}

export default ProductDetail