import './Header.css'
import Navbar from '../Navbar/Navbar'
import MediaLinks from '../MediaLinks/MediaLinks'
import MobileNavbar from '../MobileNavbar/MobileNavbar'

const Header = () => {
    return (
        <header id='top' className='header relative flex flex-col gap-5 py-5'>
            <article className='page-title-container flex flex-col items-center text-3xl md:text-6xl lg:text-7xl font-extrabold'>
                <h1 className='nicky-t'>NICKY-T</h1>
                <h2 className='and'>AND</h2>
                <h2 className='the-snake'>THE SNAKECHARMERS</h2>
            </article>
            <MobileNavbar />
            <Navbar />
            <MediaLinks />
        </header>
    )
}

export default Header