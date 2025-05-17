import React from 'react'
import animation from "../Asset/images/animation-2.png"
import { TypingEffect } from "react-typing-text-effect";
const One = () => {
  return (
    <div>
      <section className="one-section">
        <img className='animation' src={animation} alt="" />
  <div className="one-content">
    <h3 id="what">
      <img src="/images/Vector.png" alt="" /> What We Do
    </h3>
  </div>
    <div className='learn'>
      <TypingEffect
      texts={[" WEB DEVELOPMENT", " SOFTWARE TESTING" , " WEB3 DEVELOPMENT" , "BLOCKCHAIN DEVELOPMENT" , "MARKETING SERVICES" , " DEVOPS SERVICES"]} />  

    </div>
    <div className="lrn-btn">
      <button>Learn More About Our Solution</button>
    </div>
</section>
    </div>
  )
}

export default One
