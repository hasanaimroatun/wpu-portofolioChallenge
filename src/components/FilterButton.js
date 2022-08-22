import React, {useState, useEffect} from 'react'
import Project from './project.json'
import img1 from './pic/404notFound.png'
import img2 from './pic/myGallery.png'
import img3 from './pic/teamPage.png'
import img4 from './pic/quote.png'
import img5 from './pic/windbnb.png'
import img6 from './pic/interiorConsultant.png'
import img7 from './pic/recipePage.png'

function FilterButton() {
    const pic = [img1, img2, img3, img4, img5, img6, img7]
    const [isOpen, setIsOpen] = useState(true)
    const [card, setCard] = useState(Project)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClick1 = () => {
        setCard(Project)
    }

    const handleClick2 = () => {
        setCard(
            Project && Project.filter(p => {
                return (
                    p.group === "react"
                )
            })
        )
    }

    const handleClick3 = () => {
        setCard(
            Project && Project.filter(p => {
                return (
                    p.group === "responsive"
                )
            })
        )
    }

    useEffect(() => {
      setCard(Project)
    }, [])
    
  return (
    <div>
        <div
            class="card mb-2"
            style={{cursor: "pointer"}}
            onClick={handleClick}
        >
            <div class="card-body">
                <p class="card-text text-muted">
                    Project (5)
                </p>
                {isOpen?
                    <div>
                        <button 
                            type="button" 
                            class="btn btn-outline-primary" 
                            onClick={handleClick1}
                        >
                            All Projects
                        </button>
                        <button 
                            type="button" 
                            class="btn btn-outline-primary"
                            style={{marginLeft:"10px"}}
                            onClick={handleClick2}
                        >
                            React
                        </button>
                        <button 
                            type="button" 
                            class="btn btn-outline-primary" 
                            style={{marginLeft:"10px"}}
                            onClick={handleClick3}
                        >
                            Responsive
                        </button>
                    </div>
                    : null
                }
            </div>
        </div>
        
        <div class="row g-0">
            {card && card.map(p => {
                return (
                <div class="card col-md-4 col-sm-6 mb-2">
                    <div class="card-body" id={p.id}>
                        <img src={pic[p.id - 1]} class="img-fluid rounded mb-2" alt={p.title}/>
                        <a 
                            href={p.linkHTML} 
                            class="card-link"
                            style={{color:"inherit", textDecoration:"none"}}>
                            <small>
                                #HTML
                            </small>
                        </a>
                        <a 
                            href={p.linkCSS} 
                            class="card-link"
                            style={{color:"inherit", textDecoration:"none"}}>
                            <small>
                                #CSS
                            </small>
                        </a>
                        <a 
                            href={p.linkCode} 
                            class="card-link"
                            style={{color:"inherit", textDecoration:"none"}}>
                            <small>
                                #{p.group}
                            </small>
                        </a>
                        <br/><br/>
                        <h5 class="card-title">
                            {p.title}
                        </h5>
                        <p class="card-text text-muted">
                            <small>
                                {p.description} 
                            </small> 
                        </p>
                        <br/>
                        <span>
                            <button type="button" class="btn btn-primary">
                                <a 
                                    href={p.linkDemo} 
                                    class="card-link" 
                                    style={{color:"inherit", textDecoration:"none"}}>
                                        Demo
                                </a>
                            </button>
                        </span>
                        <span style={{marginLeft:"10px"}}>
                            <button type="button" class="btn btn-outline-primary">
                                <a 
                                    href={p.linkCode} 
                                    class="card-link" 
                                    style={{color:"inherit", textDecoration:"none"}}>
                                        Code
                                </a>
                            </button>
                        </span>
                    </div>
                </div>
                )
            })}
        </div>

    </div>
  )
}

export default FilterButton