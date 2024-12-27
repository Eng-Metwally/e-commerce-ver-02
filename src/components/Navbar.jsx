import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary py-3 sticky-top">
      <div className="container fs-5">
        <NavLink className="navbar-brand" to="/">
          <span className="fs-3 fw-bold">E-Commerce</span>
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product" activeClassName="active">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className="nav-link btn btn-secondary border border-dark rounded-3 px-4 hover-effect m-2" 
                to="/login" 
                activeClassName="active"
              >
                <i className="fas fa-sign-in-alt me-1"></i>
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link btn btn-secondary border border-dark rounded-3 px-4 hover-effect m-2" 
                to="/register" 
                activeClassName="active"
              >
                <i className="fa fa-user-plus me-1"></i>
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link btn btn-secondary border border-dark rounded-3 px-4 hover-effect m-2" 
                to="/cart" 
                activeClassName="active"
              >
                <i className="fa fa-shopping-cart me-1"></i>
                Cart
                <span> ({totalQuantity})</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;













