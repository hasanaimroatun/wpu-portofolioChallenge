import React from 'react'
import img3 from './pic/myGallery.png'

function Project2() {
  return (
    <div 
        class="card" 
        style={{width:"18rem", height:"33rem", padding:"22px", marginLeft:"17rem"}}>
        <img src="" class="img-fluid rounded" alt="profile"/>
        <div class="card-body">
            <a 
                href="https://github.com/hasanaimroatun/wpu-myGalleryChallenge/blob/main/index.html" 
                class="card-link">
                #HTML
            </a>
            <a 
                href="https://github.com/hasanaimroatun/wpu-myGalleryChallenge/blob/main/css/style.css" 
                class="card-link">
                    #CSS
            </a>
            <a 
                href="https://github.com/hasanaimroatun/wpu-myGalleryChallenge/blob/main/css/style.css" 
                class="card-link">
                    #responsive
            </a>
            <br/><br/>
            <h5 class="card-title">
                My Gallery
            </h5>
            <p class="card-text text-muted">
                In this project, I work with HTML and CSS to create a responsive page . 
                The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
                Quisque feugiat malesuada molestie. 
            </p>
            <br/>
            <span>
                <button type="button" class="btn btn-primary">
                    <a 
                        href="https://my-gallery-challenge-8d18e.web.app" 
                        class="card-link" 
                        style={{color:"inherit", textDecoration:"none"}}>
                            Demo
                    </a>
                </button>
            </span>
            <span style={{marginLeft:"10px"}}>
                <button type="button" class="btn btn-outline-primary">
                    <a 
                        href="https://github.com/hasanaimroatun/wpu-myGalleryChallenge" 
                        class="card-link" 
                        style={{color:"inherit", textDecoration:"none"}}>
                            Code
                    </a>
                </button>
            </span>
        </div>
    </div>
  )
}

export default Project2