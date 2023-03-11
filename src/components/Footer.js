import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Our services</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Blogs</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Terms and Condition</h4>
              <ul>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Cookie Notice</a>
                </li>
                <li>
                  <a href="/">Terms of Service</a>
                </li>
                <li>
                  <a href="/">Alerts</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Settings</h4>
              <ul>
                <li>
                  <a href="/">Watchlist</a>
                </li>
                <li>
                  <a href="/">SiteMap</a>
                </li>
                <li>
                  <a href="/">Newsletter</a>
                </li>
                <li>
                  <a href="/">Guides</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <ul>
                  <a href="/">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
