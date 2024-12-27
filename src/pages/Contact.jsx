import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container"  style={{ minHeight: '78vh' }}>
        <h2 className="text-center my-5 display-4 fw-semibold">Contact Us</h2>
        <hr className="border border-1 border-dark" />
        <div className="d-flex justify-content-center">
          <form style={{ width: '40%' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Message</label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                placeholder="Write your message"
                required
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="bnav-link btn btn-secondary border border-dark rounded-3 px-4 hover-effect" style={{ width: '30%' }}>Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
