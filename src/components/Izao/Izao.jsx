import './Izao.css';
import Socials from '../Socials/Socials';
import { NavLink } from 'react-router-dom';

export default function Izao({ onChangeBtn, activeBtn }) {
  return (
    <div className='izao'>
      <h1 style={{ fontWeight: 400 }}>
        Hi, I'm
        <br />
        <b>Zohra Amel Ouferhat</b>
      </h1>
      <div className="buttons">
      
        <NavLink 
          to="/I_Code"
          className="code"
        >
          I Code
        </NavLink>
        <NavLink 
          to="/I_Design"
          className="design"
        >
          I Design
        </NavLink>
        <NavLink 
          to="/I_Visualize"
          className="visualize"
        >
          I Visualize
        </NavLink>
        
      </div>
      <Socials />
    </div>
  );
}
