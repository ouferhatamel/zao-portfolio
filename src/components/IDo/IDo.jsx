import './IDo.css';
import { Link } from 'react-router-dom';

export default function IDo({ ido }) {
  let content

  switch (ido) {
    case 'code':
      content = 
        <div className='green'>
            <h2>I code</h2>
            <p>
                I build responsive, accessible, and user-focused websites using modern tools like React, JavaScript, CSS, and more. I focus on clean, scalable code and smooth user experiences.
            </p>
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
        </div>;
      break;
    case 'design':
      content =
      <div className='red'>
        <h2>I design</h2>
        <p>
            From websites to brand identities, I create designs that are intuitive, visually appealing, and aligned with your audience. UI/UX is not just how it looks, it’s how it feels — and I care about both.
        </p>
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
      
      break;
    case 'visualize':
      content = <p>I visualize complex ideas with clarity through storytelling and visuals.</p>
      break;
    default:
      content = 
        <p>
            I'm a front-end engineer and web designer with a passion for both <b style={{color: '#BB3D3C'}} >design</b> and <b style={{color: '#6A957B'}}>code</b>. I create solutions for the web that are easy to use and visually clean. I also design visual identities and enjoy turning concepts into clear and meaningful <b style={{color: '#FFBE1A'}} >visual ideas</b>.
        </p>
  }

  return (
    <div className='ido'>
      {content}
      <Link className="cta" to='/Contact'>Work With Me &#8594;</Link>
    </div>
  );
}