import './IManage.css'
import Izao from '../../components/Izao/Izao'
import { Link } from 'react-router-dom'

export default function IManage() {
  return (
    <div className='imanage pageStyle'>
      <div className="left">
        <Izao />
      </div>
      <div className="right">
        <div>
          <h2>I manage</h2>
          <p>
            As a digital project manager, I bring clarity, structure, and momentum to creative and technical projects. I lead cross-functional teams, align goals, and ensure that projects are delivered on time and within scope—while keeping collaboration smooth and communication transparent.
          </p>
        </div>
        <div>
          <h3>Project Management Skills</h3>
          <ul>
            <li>Agile</li>
            <li>Project scoping</li>
            <li>Planning</li>
            <li>Communication</li>
            <li>Team coordination</li>
            <li>Risk & time management</li>
            <li>Digital workflow optimization</li>
            <li>Tool adoption & onboarding</li>
          </ul>
        </div>
        <div className="buttons">
          <a
            href="/resumes/Zohra Amel Ouferhat_Project Manager_Resume.pdf"
            download
            className="cta"
          >
            Download Resume &#8595;
          </a>
          <Link className="cta" to='/Contact'>Hire me &#8594;</Link>
        </div>
      </div>
    </div>
  )
}
