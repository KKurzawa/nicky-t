import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"

const mediaLinksList = [
    {
        key: 1,
        icon: <FaFacebookSquare />,
        link: 'https://www.facebook.com/NickyTSnakeCharmers',
        delay: 1.3
    },
    {
        key: 2,
        icon: <FaInstagramSquare />,
        link: 'https://www.instagram.com/nickytblues/',
        delay: 1.5
    },
    {
        key: 3,
        icon: <FaYoutubeSquare />,
        link: 'https://www.youtube.com/@nickytandthesnakecharmers9352',
        delay: 1.7
    },
    {
        key: 4,
        icon: <FaSpotify />,
        link: 'https://open.spotify.com/artist/0YNmqwybMecHbvzJRdBtxs?go=1&sp_cid=cd4a7eb029e5a78393d31fd1cda6fe90&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=464cc40289d14fe2',
        delay: 1.9
    },
    {
        key: 5,
        icon: <SiApplemusic />,
        link: 'https://music.apple.com/us/artist/nicky-t-and-the-snake-charmers/1588774876',
        delay: 2.1
    }
]

export default mediaLinksList