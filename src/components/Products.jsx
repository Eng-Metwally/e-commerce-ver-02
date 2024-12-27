import React, { useEffect, useState } from 'react';
import useProductFunctions from '../hooks/useProductFunctions';

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { handleAddToCart, handleBuyNowClick } = useProductFunctions();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <p className="text-center mt-5">Loading products...</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 display-3 fw-light">Latest Products</h2>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="nav-link btn btn-secondary border border-dark rounded-3 px-4 py-2" onClick={() => filterProducts('All')}>All</button>
        <button className="nav-link btn btn-secondary border border-dark rounded-3 px-4 py-2" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
        <button className="nav-link btn btn-secondary border border-dark rounded-3 px-4 py-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
        <button className="nav-link btn btn-secondary border border-dark rounded-3 px-4 py-2" onClick={() => filterProducts('jewelery')}>Jewelry</button>
        <button className="nav-link btn btn-secondary border border-dark rounded-3 px-4 py-2" onClick={() => filterProducts('electronics')}>Electronics</button>
      </div>

      <div className="row d-flex justify-content-center">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 text-center p-3">
              <div className="card-img-top mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ height: '200px', objectFit: 'contain' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  {product.title.length > 15 ? product.title.slice(0, 15) + '...' : product.title}
                </h5>
                <p className="card-text text-truncate">{product.description}</p>
              </div>
              <div className="card-footer">
                <p className="card-text fw-bold">${product.price}</p>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <button 
                  className="btn btn-dark text-white border border-dark rounded-3 px-4 py-2 hover-effect2"
                  onClick={() => handleBuyNowClick(product.id)}
                >
                  Buy Now
                </button>
                <button 
                  className="btn btn-dark text-white border border-dark rounded-3 px-4 py-2 hover-effect2"
                  onClick={() => handleAddToCart(product)} 
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
