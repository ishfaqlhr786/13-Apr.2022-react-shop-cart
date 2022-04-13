import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <>
    <div className="wrapper">
    <div className="item" >
      <img  src={product.image} alt={product.name} height="100px" width="100px"/>
      <h3>{product.name}</h3>
      <h3>${product.price}</h3>
     
        <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
        </div>
        </>
     
  );
}
