import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  const header_style = {
    width: "100%",
    height: "52px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const header_link_style = {
    fontSize: "18px",
    color: "rgb(57, 60, 65)",
  }
  
  return (
    <div>
    <header style = {header_style}>
        <Link style = {header_link_style} to = '/'>Read Tesla's 2021 Impact Report</Link>
    </header>
    </div>
  )
}

export default header