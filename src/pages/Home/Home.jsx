import './Home.css'
import { Link } from 'react-router-dom';

import Izao from "../../components/Izao/Izao";
import { useState } from 'react';


export default function Home() {
  const [ido, setIdo] = useState('default')
  return (
    
    <div className='home pageStyle'>
      <div className="left">
        <Izao onChangeBtn={setIdo} activeBtn = {ido}/>
      </div>
      <div className="right">
        <p>
            I'm a front-end engineer and web designer with a passion for both <b style={{color: '#BB3D3C'}} >design</b> and <b style={{color: '#6A957B'}}>code</b>. I create solutions for the web that are easy to use and visually clean. I also design visual identities and enjoy turning concepts into clear and meaningful <b style={{color: '#FFBE1A'}} >visual ideas</b>.
        </p>
        <Link className="cta" to='/Contact'>Work With Me &#8594;</Link>
      </div>
    </div>

  )
}
