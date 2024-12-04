import './Home.css'
import Izao from "../../components/Izao/Izao";
import Socials from '../../components/Socials/Socials';


export default function Home() {
  return (
    
    <div className='home'>
      <div className="left">
        <Izao />
        <Socials />
      </div>
      <div className="right">
        This is Right
      </div>
    </div>

  )
}
