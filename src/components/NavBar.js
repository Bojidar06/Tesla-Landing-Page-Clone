import { React, useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { FaBars } from 'react-icons/fa'
import { FaCompressArrowsAlt } from 'react-icons/fa'

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(true)

  const links_style = {
    textDecoration: "none",
    color: "black"
  }


  return (
    <nav className = "nav_style">
        <div className = "nav_left">
            <Link style = {links_style} to = '/'>{<h1>TESLA</h1>}</Link>
        </div>
        <div style = {{left: navbarOpen? "150vw" : "calc(100vw - 200px)"}} className = "mobile">
        <button onClick={() => {
          setNavbarOpen(true)
        }} className = "closeBtn"><FaCompressArrowsAlt /></button>
        <div className = "nav_middle">
            <ul>
                <li><Link style = {links_style} to = "/models">Model S</Link></li>
                <li><Link style = {links_style} to = "/model3">Model 3</Link></li>
                <li><Link style = {links_style} to = "/modelx">Model X</Link></li>
            </ul>
        </div>
        <div className = "nav_right">
            <ul>
                <li><Link style = {links_style} to = "/shop">Shop</Link></li>
                <li><Link style = {links_style} to = "/account">Account</Link></li>
                <li><Link style = {links_style} to = "/menu">Menu</Link></li>
            </ul>
        </div>
        </div>

        <button onClick={() => {
          setNavbarOpen(!navbarOpen)
        }} className = "navMobile"><FaBars /></button>
    </nav>
  )
}

export default NavBar