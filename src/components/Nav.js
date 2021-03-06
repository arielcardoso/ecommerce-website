import React, {useState} from 'react'
import LineIcon from 'react-lineicons';
import {Link, NavLink} from 'react-router-dom'

import Logo from '../assets/images/logo.svg';

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav>
            <div className="navbar container">
                <Link className='logo' to='/' >
                    <img src={Logo} alt='LoremPie' />
                </Link>

                <div className='nav-icon' onClick={handleClick}>
                    <LineIcon name={clicked ? 'close' : 'menu'} size="lg" />
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
            </div>
        </nav>

    )
}
export default Nav;