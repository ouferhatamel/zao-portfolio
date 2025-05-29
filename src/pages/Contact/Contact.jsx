import './Contact.css'
import Izao from "../../components/Izao/Izao";
import ContactMe from '../../components/ContactMe/ContactMe';
import BizCard from '../../components/BizCard/BizCard';

export default function Contact() {
  return (
    <div className="contact pageStyle">
      <div className="left">
        <BizCard />
      </div>
      <div className="right">
        <ContactMe />
      </div>
    </div>
  )
}
