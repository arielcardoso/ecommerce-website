import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import LineIcon from 'react-lineicons';
import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav>
            <div className="navbar container">
                <Link onClick={handleClick} to='/' >PROJECT</Link>
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