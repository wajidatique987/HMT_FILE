import React from 'react'
import img1 from "../Asset/images/LOGO.png"
import img2 from "../Asset/images/sixth.png"

const Six = () => {
  return (
    <div>
      <section className="six-section ">
  <div className="container">
    <div className="six-content">
      <h4 className="share">Share Your Ideas</h4>
    </div>
    <div className="form_container">
      <div className="form_control">
        <label htmlFor="first_name"></label>
        <input
          id="first_name"
          name="first_name"
          placeholder="Enter First Name..."
        />
      </div>
      <div className="form_control">
        <label htmlFor="Business_mail"></label>
        <input
          id="Business_mail"
          name="Business_mail"
          placeholder="Enter Business Mail"
        />
      </div>
      <div className="form_control">
        <label htmlFor="Phone"></label>
        <input
          type="number"
          id="Phone"
          name="Phone"
          placeholder="Enter Phone Number"
        />
      </div>
      <div className="form_control">
        <label htmlFor="company_name"></label>
        <input
          id="company_name"
          name="company_name"
          placeholder="Enter Company Name..."
        />
      </div>
      <div className="textarea_control">
        <label htmlFor="address"> </label>
        <textarea
          id="address"
          name="address"
          row={50}
          cols={44}
          placeholder="Your Message.."
          defaultValue={""}
        />
      </div>
      <button className="send-btn">Send</button>
      <div className="six-img">
        <img className="pic" src= { img1} alt="" />
        <img className="six-pic" src= { img2} alt="" />
      </div>
      <div className="six-content2">
        <p>
          Whether you're just starting out or ready to level up, our team of
          experts is here to propel your brand forward, unlock new growth, and
          bring your vision to life. Let’s build something incredible, side by
          side.
        </p>
      </div>
      <div className="btn-container">
        <button className="info-btn">
          <i className="bi bi-envelope" /> info@himotechglobal.com
        </button>{" "}
        <button className="phone-btn">
          <i className="bi bi-telephone" /> +91-7011508191
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Six
