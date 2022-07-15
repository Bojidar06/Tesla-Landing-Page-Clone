import React from 'react'
import './CarSection.css'

function CarSection({ back, title }) {
  return (
    <>
      <section style = {{backgroundImage: `url(${back})`}}>
        <div className = "section_title">
          <h1>{title}</h1>
          <p>Order Online for Touchless Delivery</p>
        </div>

        <div className = "section_buttons">
          <button style = {{backgroundColor: "rgba(23, 26, 32, 0.8)", color: "white"}}>CUSTOM ORDER</button>
          <button style = {{backgroundColor: "white", color: "black"}}>EXISTING INVENTORY</button>
        </div>
      </section>
    </>
  )
}

export default CarSection