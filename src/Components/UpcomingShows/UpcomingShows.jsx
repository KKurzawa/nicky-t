import './UpcomingShows.css'
import showsList from '../../Utils/ShowsList'

const UpcomingShows = () => {
    return (
        <article className='upcoming-shows-main w-[70%]'>
            <h2 className='upcoming-shows-title mb-1 text-2xl font-bold'>UPCOMING SHOWS</h2>
            {/* <section className='date-shows grid grid-cols-2'>
                <h3>Date</h3>
                <h3>Show</h3>
            </section> */}
            {showsList.map((item, index) => index < 5 && (
                <article key={item.index} className='upcoming-shows-container flex flex-col gap-1 text-xl py-4'>
                    <section className='upcoming-date-time flex gap-1'>
                        <h4 className='font-bold'>{item.date}</h4>
                        <h4>@ {item.time}</h4>
                    </section>
                    <section className='upcomint-venue-container flex flex-col gap-1'>
                        <button
                            className='upcoming-venue w-fit'
                            onClick={() => setTimeout(() => {
                                window.open(item.venueLink, '__blank')
                            }, 500)}>{item.venue}</button>
                        <button
                            className='upcoming-location w-fit'
                            onClick={() => setTimeout(() => {
                                window.open(item.locationLink, '__blank')
                            }, 500)}>{item.location}</button>
                    </section>
                </article>
            ))}
        </article>
    )
}

export default UpcomingShows