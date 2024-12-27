import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center my-5 display-4 fw-semibold">About Us</h2>
        <hr className="border border-1 border-dark" />
        <p className="text-center fs-5 text-secondary mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, iste reiciendis autem tempore, veniam iure similique debitis, rerum labore eos obcaecati? Maxime, provident facilis laborum fuga quibusdam animi aut qui! Vel alias aperiam, sapiente soluta non veniam magni nostrum delectus praesentium dolorem quas. Deserunt blanditiis et quidem, rerum architecto corrupti expedita eveniet placeat eligendi asperiores. Minus sapiente tempore libero vitae.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, iste reiciendis autem tempore, veniam iure similique debitis, rerum labore eos obcaecati? Maxime, provident facilis laborum fugaconsectetur, adipisicing elit. Unde, iste reiciendis autem tempore, veniam iure similique debitis, rerum labore eos obcaecati? Maxime, provident facilis laborum fuga  quibusdam animi aut qui! Vel alias aperiam, sapiente soluta non veniam magni nostrum delectus praesentium dolorem quas. Deserunt blanditiis et quidem, rerum architecto corrupti expedita eveniet placeat eligendi asperiores. Minus sapiente tempore libero vitae.
        </p>
      </div>

      <h2 className="text-center my-5 display-4 fw-semibold">Our Products</h2>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/775282/pexels-photo-775282.jpeg"
                className="card-img-top"
                alt="Men's Clothing"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/2929546/pexels-photo-2929546.jpeg?auto=compress&cs=tinysrgb&h=200&w=300"
                className="card-img-top"
                alt="Women's Clothing"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/1449650/pexels-photo-1449650.jpeg?auto=compress&cs=tinysrgb&h=200&w=300"
                className="card-img-top"
                alt="Jewelry"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Jewelry</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/1149074/pexels-photo-1149074.jpeg"
                className="card-img-top"
                alt="Electronics"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
