import './Home.css'
import SnakeCharmers1 from '/Snakecharmers1.jpg'
import UpcomingShows from '../../Components/UpcomingShows/UpcomingShows'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'
import Contact from '../../Components/Contact/Contact'
import LifeOnLifesTerms from '/LifeOnLifesTerms.jpg'
const Home = () => {
    return (
        <main id='Home' className='home-main flex flex-col items-center'>
            <h2 className='latest-album-title my-5 text-2xl font-bold'>LATEST ALBUM</h2>
            <article className='home-pic-container flex justify-center w-[85%] md:w-[85%] lg:w-[75%] h-[85%] md:h-[85%] lg:h-[75%] mb-2 rounded-lg'>
                <img src={LifeOnLifesTerms} className='home-band-pic w-[95%] h-[95%] py-2 md:py-6 rounded-lg' />
            </article>
            <button
                className='latest-album-download-btn w-fit mb-10 text-xl'
                onClick={() => setTimeout(() => {
                    window.open('https://www.google.com/', '__blank')
                }, 500)}>Download</button>
            <article className='grid grid-cols-2 justify-items-center w-full mb-10'>
                <UpcomingShows />
                <AudioPlayer />
            </article>
            <Contact />
        </main>
    )
}

export default Home