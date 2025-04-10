import './Portfolio.css'
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo'
import ProjectPortfolio from '../../components/ProjectPortfolio/ProjectPortfolio'


export default function Portfolio() {
  

  return (
    <div className="portfolio pageStyle">
      <div className="left">
        <ProjectInfo />
      </div>
      <div className="right">
        <ProjectPortfolio />
      </div>
    </div>
  )
}
