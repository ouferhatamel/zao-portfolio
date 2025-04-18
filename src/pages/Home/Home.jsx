import './Home.css'
import { Link } from 'react-router-dom';

import Izao from "../../components/Izao/Izao";


export default function Home() {
  return (
    
    <div className='home pageStyle'>
      <div className="left">
        <Izao />
      </div>
      <div className="right">
        <p>
          As a front-end developer with a passion for both <b style={{color: '#BB3D3C'}} >design</b> and <b style={{color: '#6A957B'}}>code</b>, I specialize in crafting engaging websites and mobile applications. My expertise also extends to creating visual identities and illustrations that resonate with users.
        </p>
        <Link className="cta" to='/Portfolio'>My work &#8594;</Link>
      </div>
    </div>

  )
}
