import React from 'react'
import img1 from "../Asset/images/fiveSection-1.png"
import img2 from "../Asset/images/fiveSection-2.png"
import img3 from "../Asset/images/fiveSection-3.png"
import img4 from "../Asset/images/fiveSection-4.png"
import img5 from "../Asset/images/fiveSection-5.png"
import img6 from "../Asset/images/fiveSection-6.png"
import img7 from "../Asset/images/gif.gif"
import arrow from "../Asset/images/arrow.png"
import arrow1 from "../Asset/images/arrow1.png"
import icon from "../Asset/images/vector.png"

const Five = () => {
  return (
    <div>
        <section className="five-section">
  <div className="container">
    <div className="row heading ">
      <div className="col-6 text-align">
        <h4 className='heading-five'>
          <img src= {icon} alt="" /> Explore Our Expert
          Solutions
        </h4>
      </div>
      <div className="col-6 text-align">
        <p className='upper-heading-fifth-section'>
          From strategy to execution, discover the services that drive your
          business forward. Let’s build something great together.
        </p>
      </div>
    </div>
    <div className="row ">
      <div className="col-6 text-align">
        <h1 className='web-d'>WEB DEVELOPMENT</h1>
        <div className="arrow-1">
          <img src= {arrow} alt="" />
        </div>
        <p className='web-p'>
          We create responsive, user-friendly websites that blend seamless
          functionality with stunning design. Our web solutions are built to
          enhance your brand's online presence and provide a superior user
          experience.
        </p>
      </div>
      <div className="col-6 ctn-1">
        <img
          className="web-img-1"
           src={img1}  alt=""
        />
        <img className="clk-1" src= {img7} alt="" />
      </div>
      <div className="row ">
        <div className="col-6 ctn-2">
          <img
            className="web-img-2"
            src= {img2} alt=""
          />
          <img className="clk-2" src= {img7} alt="" />
        </div>
        <div className="col-6 text-align">
          <h1 className='software'>SOFTWARE TESTING</h1>
          <div className="arrow-2">
          <img src= {arrow1} alt="" />
        </div>
          <p className='software-p'>
            Ensure your software runs smoothly with our comprehensive testing
            services. We perform functional, performance, and security testing
            to deliver robust, bug-free applications that perform flawlessly.
          </p>
        </div>
        <div className="row ">
          <div className="col-6 text-align">
            <h1 className='web-d3'>WEB3 DEVELOPMENT</h1>
            <div className="arrow-1">
          <img src= {arrow} alt="" />
        </div>
            <p className='web-p'>
              Dive into the future of the internet with our Web3 development
              services. We build decentralized applications (dApps), smart
              contracts, and token systems that empower your business with
              blockchain-based solutions.
            </p>
          </div>
          <div className="col-6 ctn-3">
            <img
              className="web-img-3"
              src= {img3}   alt=""
            />
            <img className="clk-3" src= {img7} alt="" />
          </div>
        </div>
        <div className="row ">
          <div className="col-6 ctn-4">
            <img
              className="web-img-4"
              src = {img4} alt=""
            />
            <img className="clk-4" src= {img7} alt="" />
          </div>
          <div className="col-6 text-align">
            <h1 className='block-chain'>BLOCKCHAIN DEVELOPMENT</h1>
            <div className="arrow-2">
              <img src={arrow1} alt="" />
            </div>
            <p className='blockchain-p'>
              Our blockchain development service provides secure, transparent,
              and scalable solutions. From private blockchains to public
              platforms, we help businesses streamline processes with
              cutting-edge technology.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-6 text-align">
            <h1 className='web-m'>MARKETING SERVICES</h1>
            <div className="arrow-1">
              <img src= {arrow} alt="" />
            </div>
            <p className='web-marketing-p'>
              Boost your brand’s visibility with our expert marketing
              strategies. From digital campaigns to SEO, we help you connect
              with your audience and grow your business through tailored
              marketing efforts.
            </p>
          </div>
          <div className="col-6 ctn-5">
            <img
              className="web-img-5"
              src= {img5}  alt=""
            />
            <img className="clk-5" src= {img7} alt="" />
          </div>
        </div>
        <div className="row ">
          <div className="col-6 ctn-6">
            <img
              className="web-img-6"
              src= {img6}  alt="" />
            <img className="clk-6" src= {img7} alt="" />
          </div>
          <div className="col-6 text-align">
            <h1 className='devops-s'>DEVOPS SERVICES</h1>
            <div className="arrow-2">
              <img src={arrow1} alt="" />
            </div>
            <p className='devops-p'>
              Optimize your development process with our DevOps solutions. We
              automate workflows, enhance collaboration between teams, and
              improve delivery speed to ensure continuous integration and
              deployment for your projects.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-align">
            <h1 className="description">Let's make your Ideas</h1>
            <h1 className="describe">HAPPEN</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Five
