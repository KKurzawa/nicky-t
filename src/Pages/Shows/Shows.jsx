import './Shows.css'
import showsList from '../../Utils/ShowsList'

const Shows = () => {
    return (
        <>
            {/* small */}
            <article className='small-shows-main flex md:hidden justify-center w-full'>
                <section className='small-shows-wrapper flex flex-col w-[75%] my-5'>
                    <h2 className='shows-title mb-1 text-2xl font-bold'>SHOWS</h2>
                    {showsList.map((item) => (
                        <article key={item.index} className='small-shows-container pb-3 mb-3'>
                            <section className='date-time flex flex-row gap-1'>
                                <h4 className='font-bold'>{item.date}</h4>
                                <h4>@ {item.time}</h4>
                            </section>
                            <button
                                className='venue w-fit'
                                onClick={() => setTimeout(() => {
                                    window.open(item.venueLink, '__blank')
                                }, 500)}>{item.venue}</button>
                            <button
                                className='location w-fit'
                                onClick={() => setTimeout(() => {
                                    window.open(item.locationLink, '__blank')
                                }, 500)}>{item.location}</button>
                        </article>
                    ))}
                </section>
            </article>
            {/* medium and large */}
            <article className='shows-main hidden md:flex justify-center w-full'>
                <section className='shows-wrapper w-[85%] lg:w-[80%] my-5'>
                    <h2 className='shows-title mb-5 text-2xl font-bold'>SHOWS</h2>
                    <section className='date-shows grid grid-cols-4 lg:grid-cols-3 md:text-lg lg:text-xl'>
                        <h3>Date</h3>
                        <h3>Show</h3>
                        <h3>Location</h3>
                    </section>
                    {showsList.map((item) => (
                        <article key={item.index} className='shows-container grid grid-cols-4 lg:grid-cols-3 text-base lg:text-xl py-4'>
                            <section className='date-time flex flex-col lg:flex-row gap-1'>
                                <h4 className='font-bold'>{item.date}</h4>
                                <h4>@ {item.time}</h4>
                            </section>
                            <section className='venue-container col-start-2'>
                                <button
                                    className='venue w-fit'
                                    onClick={() => setTimeout(() => {
                                        window.open(item.venueLink, '__blank')
                                    }, 500)}>{item.venue}</button>
                            </section>
                            <section className='location-container col-start-3 col-span-2'>
                                <button
                                    className='location w-fit'
                                    onClick={() => setTimeout(() => {
                                        window.open(item.locationLink, '__blank')
                                    }, 500)}>{item.location}</button>
                            </section>
                        </article>
                    ))}
                </section>
            </article>
        </>
    )
}

export default Shows