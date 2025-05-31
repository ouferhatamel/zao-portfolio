
import './IDesign.css'
import Izao from '../../components/Izao/Izao'
import { Link } from 'react-router-dom'

export default function IDesign() {
  return (
    <div className='idesign pageStyle'>
        <div className="left">
          <Izao />
        </div>
        <div className="right">
          <div>
            <h2>I design</h2>
            <p>
                From websites to brand identities, I create designs that are intuitive, visually appealing, and aligned with your audience. UI/UX is not just how it looks, it’s how it feels — and I care about both.
            </p>
          </div>
          <div>
            <h3>
              Tool Stack
            </h3>
            <ul>
                <li>Adone Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Xd</li>
                <li>Adobe After Effects</li>
                <li>Figma</li>
            </ul>
          </div>
          <div className="buttons">
          <a
          href="/resumes/Zohra Amel_Ouferhat_Graphic Designer_resume.pdf"
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
