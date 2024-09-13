import './Home.css'
import pic from '/Snakecharmers1.jpg'

const Home = () => {
    return (
        <main id='Home' className='home-main flex flex-col items-center'>
            <img src={pic} className='band-pic w-[65%]' />
        </main>
    )
}

export default Home