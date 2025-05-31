import './Home.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Izao from "../../components/Izao/Izao";

export default function Home() {
  const [ido, setIdo] = useState('default');
  const [showTrilingual, setShowTrilingual] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrilingual(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div className='home pageStyle'>
      <div className="left">
        <Izao onChangeBtn={setIdo} activeBtn={ido} />
      </div>
      <div className="right">
        {showTrilingual && (
          <h2 className="trilingual">Oh yeah, I'm trilingual: Arabic, French, English!</h2>
        )}
        <p>
          I'm a front-end engineer and web designer with a passion for both <b style={{ color: '#BB3D3C' }}>design</b> and <b style={{ color: '#6A957B' }}>code</b>. I create solutions for the web that are easy to use and visually clean. I also have experience in <b style={{ color: '#FFBE1A' }}>project management</b> and enjoy turning concepts into clear, organized, and actionable plans that bring ideas to life.
        </p>
        <Link className="cta" to='/Contact'>Hire me &#8594;</Link>
      </div>
    </div>
  );
}
