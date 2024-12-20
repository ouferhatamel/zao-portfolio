import './Socials.css'

// images
import github from '../../assets/github-icon.svg'
import behance from '../../assets/behance-icon.svg'
import linkedin from '../../assets/linkedin-icon.svg'

export default function Socials() {
  return (
    <div className="socials">
        <a href="https://github.com/ouferhatamel" target='_blank'><img src={github} alt="Github" /></a>
        <a href="https://www.behance.net/ouferhatamel" target='_blank'><img src={behance} alt="Behance" /></a>
        <a href="https://www.linkedin.com/in/amel-zohra-ouferhat-97467b117/" target='_blank'><img src={linkedin} alt="Linkedin" /></a>
    </div>
  )
}
