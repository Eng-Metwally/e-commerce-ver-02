import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const shippingCost = 30;
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const countries = ["Egypt" , "Qatar" ,"United States", "Canada", "Mexico"];
  const states = [ "Mansoura" , "Cairo" , "Tanta", "California", "New York" , "Texas"];

  return (
    <>
      <Navbar />
      <h2 className="text-center m-4 display-3 fw-bold">Checkout</h2>
      <hr className='container' />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <div className="border border-2 p-4 rounded">
              <h2 className="mb-4 p-3 rounded fw-bold navbar-light bg-body-secondary">Billing Address</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row mb-2">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label fw-bold">First Name</label>
                      <input type="text" id="firstName" name="firstName" className="form-control border-2" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label fw-bold">Last Name</label>
                      <input type="text" id="lastName" name="lastName" className="form-control border-2" required />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                    <input type="email" id="email" name="email" className="form-control border-2" placeholder="you@example.com" required />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="address1" className="form-label fw-bold">Address</label>
                    <input type="text" id="address1" name="address1" className="form-control border-2" placeholder="333 Sniper St." required />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="address2" className="form-label fw-bold">Address 2 (Optional)</label>
                    <input type="text" id="address2" name="address2" className="form-control border-2" placeholder="apartment, suite, or unit (optional)" />
                  </div>

                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label htmlFor="country" className="form-label fw-bold">Country</label>
                      <select id="country" name="country" className="form-select border-2" required>
                        <option value="">Choose...</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label fw-bold">State</label>
                      <select id="state" name="state" className="form-select border-2" required>
                        <option value="">Choose...</option>
                        {states.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="zip" className="form-label fw-bold">Zip</label>
                      <input type="text" id="zip" name="zip" className="form-control border-2" placeholder="Enter your zip code" required />
                    </div>
                  </div>

                  <hr />

                  <h4 className="mb-2">Payment</h4>

                  <div className="mb-2">
                    <label htmlFor="cardName" className="form-label fw-bold">Name on Card</label>
                    <input type="text" id="cardName" name="cardName" className="form-control border-2" required />
                    <small className="text-muted">Full Name as displayed on Card</small>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="cardNumber" className="form-label fw-bold">Credit Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" className="form-control border-2" placeholder="credit card..." required />
                  </div>

                  <div className="row mb-2">
                    <div className="col-md-6">
                      <label htmlFor="expiration" className="form-label fw-bold">Expiration Date</label>
                      <input type="text" id="expiration" name="expiration" className="form-control border-2" placeholder="MM/YY" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cvv" className="form-label">CVV</label>
                      <input type="text" id="cvv" name="cvv" className="form-control border-2" placeholder="Enter your CVV" required />
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="btn btn-primary w-100 py-2">Continue to Checkout</button>
                  </div>

                </form>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border border-2 rounded">
              <h3 className="mb-4 p-3 rounded fw-bold navbar-light bg-body-secondary" >Order Summary</h3>
              <div className="d-flex justify-content-between mb-3">
                <span>Products ({totalQuantity})</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total Amount</strong>
                <strong>${(totalAmount + shippingCost).toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
