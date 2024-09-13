import './MobileMediaLinks.css'
import mediaLinksList from '../../Utils/MediaLinkList'
import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
const MobileMediaLinks = ({ props: { setIsOpen } }) => {

    return (
        <article className='flex md:hidden justify-center gap-5 text-4xl'>
            {mediaLinksList.map((item) => (
                <motion.button
                    key={item.key}
                    className='mobile-media-icon relative p-1 rounded-md'
                    onClick={() => setTimeout(() => {
                        window.open(item.link, '_blank')
                        setIsOpen(false)
                    }, 500)}
                    initial={{ left: '110%' }}
                    animate={{ left: '0%' }}
                    exit={{ left: '110%' }}
                    transition={{ duration: .2, delay: item.delay }}
                >{item.icon}</motion.button>
            ))}
        </article>
    )
}

export default MobileMediaLinks