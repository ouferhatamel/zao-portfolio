import './ProjectCard.css'

export default function ProjectCard({ title, imgSrc, alt, link, category, tags = [] }) {
  const isWeb = category === "web";

  return (
    <a href={link} target="_blank" className="ProjectCard">
      <div className="overlay">
        <div className="cardInfo">
          <h3>{title}</h3>

          {isWeb && tags.length > 0 && (
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <img src={imgSrc} alt={alt} />
    </a>
  );
}
