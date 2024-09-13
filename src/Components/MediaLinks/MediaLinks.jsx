import './MediaLinks.css'
import mediaLinksList from '../../Utils/MediaLinkList'

const MediaLinks = () => {
    return (
        <article className='hidden md:flex justify-center gap-7 text-4xl'>
            {mediaLinksList.map((item) => (
                <button
                    key={item.key}
                    className='media-icon p-1 rounded-md'
                    onClick={() => setTimeout(() => {
                        window.open(item.link, '_blank')
                    }, 500)}>{item.icon}</button>
            ))}
        </article>
    )
}

export default MediaLinks