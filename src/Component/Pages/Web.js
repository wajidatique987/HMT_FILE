import React from 'react'
import animation from "../../Asset/images/animation-2.png"

const Web = () => {
  return (
    <div>
      <section className='Web'>
        <img className='animation' src={animation} alt="" />
        <div className='Web-content'>
            <h1>Web Development</h1>
            <p>Your Digital Success Partner</p>
        </div>
      </section>
      <section className='web-one'>
        <div className='web-content-1'>
          <p>At Himotech Global, we specialize in crafting world-class websites that not only look stunning but also deliver exceptional user experiences. Whether you're a startup, an enterprise, or an e-commerce brand, our web development services are designed to meet your specific goals. <br />
          From responsive design to seamless functionality, we ensure every aspect of your website is optimized for performance and growth. Let us help you build a digital experience that connects with your audience and drives results.</p>
        </div>
      </section>
      <section className='web-two'>
        <div className='web-content-heading'>
            <h3>Why Choose</h3><span className='Himotech'>Himotech Global</span><h3>for Web Development?</h3>
        </div>
        <div className='web-content-description'>
          <ul>
            <li>
            <span className='web-description'>Tailored Designs:</span> Unique, visually appealing websites that align with your brand identity.
            </li>
            <li><span className='web-description'>Optimized Performance:</span> Speed, SEO, and mobile responsiveness for better engagement.</li>
            <li><span className='web-description'>Secure Platforms:</span> Robust security protocols to protect your data and users.</li>
            <li><span className='web-description'>Scalable Solutions:</span> Websites built to grow with your business needs.</li>
            <li><span className='web-description'>Maintenance & Support:</span> Continuous updates and technical assistance post-launch.</li>
          </ul>
        </div>
      </section>
      <section className='web-three'>
        <div className='web-three-heading'>
            <h2>Core <br />Capabilities <br /> That Set Us <br />Apart</h2>
        </div>
        <div className='web-three-content-description'>
            <ul>
              <li>
                <span className='web-three-description'>Custom Website Development:</span><p>Tailored websites built from scratch to reflect your unique vision.</p>
              </li>
              <li>
                <span className='web-three-description'>E-Commerce Solutions:</span> <p>High-performing online stores with payment gateway integration and inventory management.</p>
              </li>
              <li>
                <span className='web-three-description'>Content Management Systems (CMS):</span><p>Easy-to-manage platforms like WordPress, Drupal, and Joomla.</p>
              </li>
              <li >
              <span  className='web-three-description'> Progressive Web Apps (PWAs)</span> <p>Websites that function like apps for a superior user experience.</p>
              </li>
              <li>
                <span className='web-three-description'>Third-Party Integrations:</span><p>Seamless integration with CRMs, ERPs, analytics tools, and more.</p>
              </li>
            </ul>
        </div>
      </section>
      <section className='web-four'>
        <div className='web-four-content'>
          <h1>Let's Collaborate to Bring</h1><br />
          <h1>Your Vision to Life</h1>
        </div>

      </section>
    </div>
  )
}

export default Web  
