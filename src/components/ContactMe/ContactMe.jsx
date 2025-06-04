import './ContactMe.css'

import email from '../../assets/email-icon.svg'
import phone from '../../assets/phone-icon.svg'
import linkedin from '../../assets/linkedin-icon.svg'
import scheduler from '../../assets/scheduler-icon.svg'

export default function ContactMe() {
    return (
        <div className="contactMe">
            <h2>Contact Me</h2>
            <div className='contactIcons'>
                <p>Get in touch with me now</p>
                <div className="contactInfo">
                    <a href="mailto:zohra.amel.ouferhat@gmail.com" target='_blank'><img src={email} alt="Email Me" /></a>
                    <a href="tel:+6137934415"><img src={phone} alt="Phone number" /></a>
                    <a href="https://www.linkedin.com/in/zohra-amel-ouferhat-97467b117/" target='_blank'><img src={linkedin} alt="Linkedin" /></a>
                </div>
            </div>
            <div className='schedule'>
                <p>Schedule a call session</p>
                <div>
                    <a href="https://calendly.com/zohra-amel-ouferhat/30min" target='_blank'><img src={scheduler} alt="Schedule a meeting with me" /></a>
                </div>
                
            </div>
            <div className='contactdetails'>
                <a href='tel:+6137934415'>+1 613 793 4415</a>
                <a href='mailto:zohra.amel.ouferhat@gmail.com'>zohra.amel.oufehrat@gmail.com</a>
            </div>
            
        </div>
    )
}