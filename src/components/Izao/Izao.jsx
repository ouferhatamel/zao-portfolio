import './Izao.css';
import Socials from '../Socials/Socials';

export default function Izao() {
  return (
    <div className='izao'>
      <h1 style={{ fontWeight: 300 }}>
        Hi, This is
        <br />
        <b>Zohra Amel Ouferhat</b>
      </h1>
      <div className="buttons">
        <button className='code'>I Code</button>
        <button className='design'>I Design</button>
        <button className='visualize'>I Visualize</button>
      </div>
      <Socials />
    </div>
  );
}
