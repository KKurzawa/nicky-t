import './Home.css'
import pic from '/Snakecharmers1.jpg'
import UpcomingShows from '../../Components/UpcomingShows/UpcomingShows'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'

const Home = () => {
    return (
        <main id='Home' className='home-main flex flex-col items-center'>
            <img src={pic} className='band-pic w-[75%] my-10' />
            <article className='grid grid-cols-2 justify-items-center w-full'>
                <UpcomingShows />
                <AudioPlayer />
            </article>
        </main>
    )
}

export default Home