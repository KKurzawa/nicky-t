import './UpcomingShows.css'

const UpcomingShows = () => {
    return (
        <article className='upcoming-shows-main'>
            <h2 className='upcoming-shows-title text-2xl'>UPCOMING SHOWS</h2>
            <section className='date-shows grid grid-cols-2'>
                <h3>Date</h3>
                <h3>Shows</h3>
            </section>
        </article>
    )
}

export default UpcomingShows