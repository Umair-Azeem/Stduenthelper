import React from 'react';
import './footer.css'; // Importing CSS for styling

function footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>We are a team of developers passionate about creating awesome websites and applications.</p>
          </div>
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email: contact@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
