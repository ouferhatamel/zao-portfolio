import './IVisualize.css'
import Izao from "../../components/Izao/Izao"
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='ivisualize pageStyle'>
        <div className="left">
            <Izao />
        </div>
        <div className="right">
            <div>
                <h2>I visualize</h2>
                <p>
                    Some ideas are hard to explain — I make them visual. Whether it’s a pitch, a product, or a brand story, I help you visualize your message clearly through graphics and motion.
                </p>
                
            </div>
            <Link className="cta" to='/Contact'>Work With Me &#8594;</Link>
        </div>
    </div>
  )
}
