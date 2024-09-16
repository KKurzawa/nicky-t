import './Footer.css'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer-main flex flex-col items-center py-5'>
            <button className='top-btn text-xl font-bold' onClick={() => setTimeout(() => {
                const topButton = document.getElementById('top');
                topButton.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>To The Top</button>
            <a className='email-btn text-xl font-bold' href='mailto:kurzawa1@yahoo.com'>Email Me</a>
            <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link text-sm md:text-base '>Site Designed and Built by Kris Kurzawa</button>
            <p className='copyright text-sm md:text-base'>Copyright &copy; {today.getFullYear()} Nicky-T and The Snakecharmers - All Rights Reserved</p>
        </footer>
    )
}

export default Footer