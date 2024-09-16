import './AudioPlayer.css'
import { Spotify } from 'react-spotify-embed'

const AudioPlayer = () => {
    return (
        <article className='audio-player-main flex flex-col w-[80%] lg:gap-5'>
            <h2 className='audio-title mb-4 text-2xl font-bold'>AUDIO</h2>
            <Spotify width='100%' height='525px' link="https://open.spotify.com/artist/0YNmqwybMecHbvzJRdBtxs" />
            <p className='spotify-note mt-2 lg:mt-0 text-xs md:text-sm lg:text-base'>*Spotify player is for preview purposes. Please support Nicky T and The Snakecharmers and live music by purchasing merchandise on the audio page.</p>
        </article>

    )
}

export default AudioPlayer