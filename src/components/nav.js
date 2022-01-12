import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons'

const Nav = () => {
    
    const [ menu, setMenu] = useState(false)
    const [ active, setActive ] = useState("Home");
    

    function ChangeShape() {
        if(!menu) {
            setMenu(true)
        }else{
            setMenu()
        }
    }
    
    function event (event){
        setActive(event.target.innerHTML)
        setMenu(!menu)
    }


    return (
        <div>
            <div onClick={ChangeShape} className="hamburger-btn">
                <span className={menu ? "hamburger open": "hamburger" }></span>
            </div>
            <nav className={ !menu ? "nav close": "nav"}>

                <FontAwesomeIcon className={menu ? "nav-icon open": "nav-icon"} icon={faConnectdevelop} />
                
                <div className={menu ? "nav-items open": "nav-items"}>
                <NavLink onClick={ChangeShape} className={({ isActive }) => (isActive ? 'active nav-items_item' : 'nav-items_item')} to='/my-portfolio'>Home</NavLink>
                </div>
                <div className={menu ? "nav-items open": "nav-items"}> 
                <NavLink onClick={ChangeShape} className={({ isActive }) => (isActive ? 'active nav-items_item' : 'nav-items_item')} to='/about'>About Me</NavLink>
                </div>
                <div className={menu ? "nav-items open": "nav-items"}>
                <NavLink onClick={ChangeShape} className={({ isActive }) => (isActive ? 'active nav-items_item' : 'nav-items_item')} to='/resume'>Resume</NavLink>
                </div>
                <div className={menu ? "nav-items open": "nav-items"}>
                <NavLink onClick={ChangeShape} className={({ isActive }) => (isActive ? 'active nav-items_item' : 'nav-items_item')} to='/contact'>Contact Me</NavLink>
                </div>
                
            </nav>
        </div>
    )
}

export default Nav
