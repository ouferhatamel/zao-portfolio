import './ICode.css'
import { Link } from 'react-router-dom';

import Izao from "../../components/Izao/Izao";
import { useState } from 'react';


export default function ICode() {
  const [ido, setIdo] = useState('default')
  return (
    
    <div className='icode pageStyle'>
      <div className="left">
        <Izao onChangeBtn={setIdo} activeBtn = {ido}/>
      </div>
      <div className="right">
        <div>
            <h2>I code</h2>
            <p>
                I build responsive, accessible, and user-focused websites using modern tools like React, JavaScript, CSS, and more. I focus on clean, scalable code and smooth user experiences.
            </p>
        </div>
        <div>
            <h3>Frontend engineer with Fullstack power</h3>
            <ul>
                <li>html</li>
                <li>saas</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Firebase</li>
                <li>MySQL</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
        </div>
        <div className="buttons">
          <a
          href="/resumes/Zohra Amel Ouferhat_Front-End Web developer_Resume.pdf"
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
