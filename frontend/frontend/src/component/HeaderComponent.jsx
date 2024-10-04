import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HeaderComponent = () => {
  return (
    <div>
      {/* Topbar */}
      <div className="container-fluid bg-primary text-light py-2 d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="me-4">
              <i className="fas fa-map-marker-alt me-2 text-white"></i>
              <a href="#" className="text-white text-decoration-none">123 Street, New York</a>
            </div>
            <div>
              <i className="fas fa-envelope me-2 text-white"></i>
              <a href="#" className="text-white text-decoration-none">Email@Example.com</a>
            </div>
          </div>
          <div className="d-flex">
            <a href="#" className="text-white text-decoration-none me-3">
              <small className="text-white">Privacy Policy</small>
            </a>
            <a href="#" className="text-white text-decoration-none me-3">
              <small className="text-white">Terms of Use</small>
            </a>
            <a href="#" className="text-white text-decoration-none">
              <small className="text-white">Sales and Refunds</small>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid sticky-top bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <h1 className="m-0 text-primary display-6">Fruitables</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link text-dark">Home</a>
                </li>
                <li className="nav-item">
                  <a href="/shop" className="nav-link text-dark active">Price</a>
                </li>
                <li className="nav-item">
                  <a href="/car-detail" className="nav-link text-dark">Car Detail</a>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown">Pages</a>
                  <ul className="dropdown-menu">
                    <li><a href="/cart" className="dropdown-item">Cart</a></li>
                    <li><a href="/checkout" className="dropdown-item">Checkout</a></li>
                    <li><a href="/testimonial" className="dropdown-item">Testimonial</a></li>
                    <li><a href="/404" className="dropdown-item">404 Page</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link text-dark">Contact</a>
                </li>
              </ul>

              {/* Icons */}
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary btn-md-square rounded-circle me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary"></i>
                </button>
                <a href="#" className="position-relative me-3">
                  <i className="fa fa-shopping-bag fa-2x text-primary"></i>
                  <span className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ top: '-10px', right: '-10px', width: '20px', height: '20px' }}>
                    3
                  </span>
                </a>
                <a href="#" className="text-primary">
                  <i className="fas fa-user fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;