import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* Footer Column 1: About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase mb-4">About Us</h5>
            <p className="small">
              Fruitables is a leading car rental service offering a wide range of vehicles to suit your needs. We ensure top-quality service with a user-friendly booking experience.
            </p>
          </div>

          {/* Footer Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/shop" className="text-light">Price</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
            </ul>
          </div>

          {/* Footer Column 3: Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <p className="small"><i className="fas fa-map-marker-alt me-2"></i> 123 Street, New York, USA</p>
            <p className="small"><i className="fas fa-phone-alt me-2"></i> +1 234 567 890</p>
            <p className="small"><i className="fas fa-envelope me-2"></i> Email@Example.com</p>
          </div>

          {/* Footer Column 4: Social Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start">
            <p className="small mb-0">&copy; 2024 All rights reserved, Fruitables.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="small mb-0">Privacy Policy | Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;