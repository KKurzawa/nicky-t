import './Navbar.css'
import navLinks from '../../Utils/Navlinks'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='hidden md:flex justify-center items-center gap-4 text-2xl'>
            {navLinks.map((item) => (
                <NavLink
                    to={item.link}
                    className='nav-link relative px-1 h-fit'
                    key={item.key}>{item.title}</NavLink>
            ))}
        </nav>
    )
}

export default Navbar