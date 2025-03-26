import './Contact.css'
import Izao from "../../components/Izao/Izao";
import ContactMe from '../../components/ContactMe/ContactMe';

export default function Contact() {
  return (
    <div className="contact pageStyle">
      <div className="left">
        <Izao />
      </div>
      <div className="right">
        <ContactMe />
      </div>
    </div>
  )
}
