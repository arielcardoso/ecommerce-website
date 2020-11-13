import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav>
            <Link onClick={handleClick} to='/' >PROJECT</Link>
            <div className='nav-icon' onClick={handleClick}>
                <i className= {clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <NavLink onClick={handleClick} to='/'>HOME</NavLink>
                </li>
                <li>
                    <NavLink onClick={handleClick} to='/about'>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink onClick={handleClick} to='/products'>PRODUCTS</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;