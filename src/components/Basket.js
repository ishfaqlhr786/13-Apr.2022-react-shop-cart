import React from 'react';
import Header from './Header';
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-12" style={{width:"500px",margin:"0px"}}>
      <h2>Cart Items</h2>
      
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row1">
            <div className="col-21">{item.name}</div>
            <div>
              <img src={item.image} alt="ll" width="100px" height="100px"/>
            </div>
            <div className="col-21">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-21 text-right">
              {item.qty} x ${item.price.toFixed(2)}
             
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            
            <hr></hr>
            <div className="row88">
              <div className="col-8">Items Price</div>
              <div className="col-7 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row8">
              <div className="col-25">Tax Price</div>
              <div className="col-16 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row8">
              <div className="col-8">Shipping Price</div>
              <div className="col-9 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row8">
              <div className="col-28">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row8">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
