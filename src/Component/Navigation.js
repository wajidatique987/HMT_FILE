import React from 'react'
import {Link} from "react-router-dom"
const Navigation = () => {
  return (
       <div>
      <nav className=" nav-bg navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="/images/LOGO.png" alt="HMT" /></a>
    <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="  collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/">
         <a className="nav-link active" aria-current="page" >Home</a>
         </Link>
        </li>
        <li className="nav-item dropdown dropdown-toggle">
          <Link to="/Services">
          <a className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          </Link>
          <ul className="dropdown-menu mega-menu">
            <div className="row ">
              <div className="col-4 ">
                <div className="dropdown-item">
              <Link to= "/Web">
            <h4><li>Web Development{" "} <img src="/images/web-img-1.png" alt="" /></li></h4>
            </Link>
            <p className='dropdown-class'>Creating responsive and <br /> engaging websites.</p>
              </div>
                </div>
              <div className="col-4">
              <div className="dropdown-item">
              <Link to="/Web3"> <h4><li> 
                Web3 Development {""} <img src="/images/web3.png" alt="" />
              </li></h4>
           </Link>
            <p className='dropdown-class'>Building Decentralized and <br />Future-Ready Applications.</p>
              </div>
              </div>
              <div className="col-4">
              <div className="dropdown-item">
              <Link to="/Block"> <h4> <li>Blockchain Development {""} <img src="/images/blockchain.png" alt="" /></li></h4>
          </Link>
           <p className='dropdown-class'>Innovative Solutions for Secure <br />Transactions.</p>
              </div>
              </div>
              <div className="col-4">
              <div className="dropdown-item">
              <Link to ="/Software"><h4> <li>Software Testing {""} <img src="/images/testing.png" alt="" /></li></h4>
           </Link>
           <p className='dropdown-class'>Ensuring Quality and Performance <br />in Every Release.</p>
              </div>
              </div>
              <div className="col-4">
              <div className="dropdown-item">
            <Link to="/Marketing"><h4><li>Marketing Services {" "} <img src="/images/marketing.png" alt="" /></li></h4>
            </Link>
            <p className='dropdown-class'>Driving Growth with Data- <br />Driven Strategies.</p>
              </div>
              </div>
              <div className="col-4">
              <div className="dropdown-item">
              <Link to="/Devops"> <h4><li>DevOps Services <img src="/images/testing.png" alt="" /></li></h4>
           </Link>
            <p className='dropdown-class'>Streamlining Operations <br /> for Better Efficiency.</p>
              </div>
              </div>
            </div>  
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link to="/dropdown">
          <a className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/"><img src="/images/Vector.png" alt="" /> Our Team</a></li>
            <li><a className="dropdown-item" href="/"> <img src="/images/Vector.png" alt="" /> Why Himotech Global</a></li>
            <button className="contact-button">Careers</button><br />
           <div className="innovative-team">
           Join Our Innovative Team and <br />Shape the Future Together.
           </div>
          </ul>
        </li>
        <li className="nav-item">
         <Link to="/">
         <a className="nav-link active" aria-current="page" >Blog</a>
         </Link>
        </li>
      </ul>
        <button className="btn btn-outline-primary" type="submit">Contact</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation
