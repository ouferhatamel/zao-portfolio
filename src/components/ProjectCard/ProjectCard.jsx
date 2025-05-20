import { useState } from 'react'
import './ProjectCard.css'

export default function ProjectCard({ title, imgSrc, alt }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="ProjectCard">
      <div className="overlay">
        <div className="cardInfo">
          <h3>{title}</h3>
          <ul>
            <li>Logo</li>
            <li>Print</li>
          </ul>
        </div>
      </div>

      {/* Skeleton placeholder */}
      {!loaded && <div className="skeleton" style={{ width: '100%', height: '300px' }} />}

      {/* Image only shown once loaded */}
      <img
        src={imgSrc}
        alt={alt}
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
