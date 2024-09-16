import './MobileNavbar.css'
import { motion } from 'framer-motion'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import navLinks from '../../Utils/Navlinks'
import MobileMediaLinks from '../MobileMediaLinks/MobileMediaLinks'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className='mobile-nav-main absolute top-[.01rem] w-full h-full md:hidden'>
            <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                direction='right'
                size={25}
                className='hamburger'
            />
            {isOpen &&
                <motion.nav
                    transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
                    initial={{ top: '-15rem', left: 0, height: 0 }}
                    animate={{ top: '7.5rem', height: '60rem' }}
                    exit={{ top: '-15rem', height: 0 }}
                    className='mobile-nav-dropdown absolute flex flex-col gap-4 z-20 w-full py-5'
                    id='dropdown' >
                    <article className='flex flex-col items-center gap-3 pb-4'>
                        {navLinks.map((item) => (
                            <Link className='flex justify-center w-full' to={item.link} key={item.key}>
                                <motion.button
                                    className='mobile-nav-link relative z-10 text-3xl'
                                    onClick={() => setTimeout(() => {
                                        setIsOpen(false)
                                    }, 500)}
                                    initial={{ left: '110%' }}
                                    animate={{ left: '0%' }}
                                    exit={{ left: '110%' }}
                                    transition={{ duration: .2, delay: item.delay }}
                                >{item.title}</motion.button>
                            </Link>
                        ))}
                    </article>
                    <MobileMediaLinks props={{ setIsOpen, isOpen }} />
                </motion.nav>
            }
        </article>
    )
}

export default MobileNavbar