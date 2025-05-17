import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer>
  <div className="footer-container container">
    <div className="footer-logo">
      <img src="/images/LOGO.png" alt="" />
      <div className="icon-container">
        <div className="icon">
          <i className="bi bi-whatsapp" />
        </div>
        <div className="icon">
          <i className="bi bi-linkedin" />
        </div>
        <div className="icon">
          <i className="bi bi-twitter-x" />
        </div>
        <div className="icon">
          <i className="bi bi-instagram" />
        </div>
      </div>
    </div>
    <div className="link-list">
      <h4>Quick links</h4>
      <ul>
        <li>About us</li>
        <li>Services</li>
        <li>Careers</li>
      </ul>
    </div>
    <div className="link-list">
      <h4>Contact</h4>
      <ul>
        <li>info@himotechglobal.com</li>
        <li>+91-7011508191</li>
      </ul>
    </div>
    <div className="link-list">
      <h4>Newsletter</h4>
      <input type="email" placeholder="Enter your mail" />
      <div className="subs-btn">
        <button className="sub-btn">subscribe</button>
      </div>
    </div>
  </div>
  <p>
    Copyright © 2024 Himotech Global Pvt Ltd. All Rights Reserved.{" "}
    <span className="policy"> Privacy Policy</span>
  </p>
</footer>

    </div>
  )
}

export default Footer
