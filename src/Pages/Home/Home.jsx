import './Home.css'
import pic from '/Snakecharmers1.jpg'
import UpcomingShows from '../../Components/UpcomingShows/UpcomingShows'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'

const Home = () => {
    return (
        <main id='Home' className='home-main flex flex-col items-center'>
            <img src={pic} className='band-pic w-[65%] my-20' />
            <article className='grid grid-cols-2'>
                <UpcomingShows />
                <AudioPlayer />
            </article>
        </main>
    )
}

export default Home