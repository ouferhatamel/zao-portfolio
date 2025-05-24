import './ProjectPortfolio.css'
import {useState, useEffect} from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'

export default function ProjectPortfolio() {
    const [data, setData]= useState(null)
    const [activeCategory, setActiveCategory] = useState('web')

    useEffect(()=>{
        fetch('/data/data.json')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error('Error loading data:', error))
    }, [])

  if(!data) return <p>Loading...</p>

  // Map display names to keys in the JSON
  const categoryMap = {
    'Web': 'web',
    'Graphic design': 'gd',
    'Visual Ideas': 'vi'
  }

  return (
    <div className="projectPortfolio">
        <div className="projectFilters">
          {
            data.ProjectCategories.map((cat, index)=>
              (
                <button
                  key={index}
                  className={`pFilter ${categoryMap[cat] === activeCategory ? 'active' : ''}`}
                  onClick={() => setActiveCategory(categoryMap[cat])}
                >
                  {cat}
              </button>
              )
            )
          }
        </div>
        <div className="projects">
        {
          data.Projects[activeCategory]?.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imgSrc={project.imgSrc}
              alt={project.alt}
              link={project.link}
              category={activeCategory}
              tags={project.tags || []}
            />

          ))
        }
      </div>
    </div>
  )
}
