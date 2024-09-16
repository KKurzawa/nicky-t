import './Contact.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { validateEmail } from '../../Utils/emailValidator'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setTimeout(() =>
                alert('Please Enter A Valid Email')
                , 500)
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
            email: email,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your message ${name}!  We will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
    return (
        <article className='contact-main flex flex-col items-center w-[40%] mb-10'>
            <h2 className='contact-title mb-3 text-2xl font-bold'>CONTACT US</h2>
            <form onSubmit={handleSubmit} className='contact-form flex flex-col items-start w-full'>
                <article className='contact-form-container flex flex-col w-full gap-2 text-xl'>
                    <input
                        className='name'
                        type='text'
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        className='email'
                        type='text'
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        className='subject'
                        type='text'
                        placeholder='Your Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)} />
                    <textarea
                        className='message'
                        rows='5'
                        cols='10'
                        type='text'
                        placeholder='Your Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </article>
                <button type='submit' className='submit-btn px-3 my-2 text-xl rounded-lg'>Submit</button>
            </form>
        </article>
    )
}

export default Contact