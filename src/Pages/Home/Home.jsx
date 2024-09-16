import './Home.css'
import pic from '/Snakecharmers1.jpg'
import UpcomingShows from '../../Components/UpcomingShows/UpcomingShows'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
    return (
        <main id='Home' className='home-main flex flex-col items-center'>
            <img src={pic} className='band-pic w-[75%] my-10 rounded-lg' />
            <article className='grid grid-cols-2 justify-items-center w-full mb-10'>
                <UpcomingShows />
                <AudioPlayer />
            </article>
            <Contact />
        </main>
    )
}

export default Home