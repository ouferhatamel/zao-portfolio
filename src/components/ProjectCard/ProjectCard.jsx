import './ProjectCard.css'



export default function ProjectCard({title, imgSrc, alt, link}) {
  return (
    <a href={link} className="ProjectCard">
        <div className="overlay">
            <div className="cardInfo">
                <h3>{title}</h3>
                <ul>
                    <li>Logo</li>
                    <li>Print</li>
                </ul>
            </div>
        </div>
        <img src={imgSrc} alt={alt} />
    </a>
  )
}
