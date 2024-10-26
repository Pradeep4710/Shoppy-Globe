import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <div className="container my-5" style={{ width: "54%" }}>
      {cart.length === 0 ? (
        <div className="text-center">
          <h1>Your Cart is Empty</h1>
          <Link to="/" className="btn btn-warning">Continue Shopping...</Link>
        </div>
      ) : (
        cart.map((product) => (
          <div className="card mb-3 my-5" style={{ width: '700px' }} key={product.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.imgSrc} className="img-fluid rounded-start" alt={product.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="text-center text-gray-900 font-bold mb-2">₹{product.price}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {cart.length !== 0 && (
        <div className="container text-center my-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="font-bold mb-4">Subtotal: ₹{subtotal.toFixed(2)}</h2>
          <button className='btn btn-warning mx-5'>Check Out</button>
          <button onClick={() => setCart([])} className='btn btn-danger'>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;