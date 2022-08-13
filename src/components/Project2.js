import React from 'react'
import img3 from './pic/myGallery.png'

function Project2() {
  return (
    <div class="card col-md-12 col-sm-12">
        <div class="card-body">
            <img src={img3} class="img-fluid rounded mb-2" alt="profile"/>
            <a 
                href="https://github.com/hasanaimroatun/wpu-myGalleryChallenge/blob/main/index.html" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #HTML
                </small>
            </a>
            <a 
                href="https://github.com/hasanaimroatun/wpu-myGalleryChallenge/blob/main/css/style.css" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #CSS
                </small>
            </a>
            <a 
                href="https://github.com/hasanaimroatun/wpu-myGalleryChallenge/blob/main/css/style.css" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #responsive
                </small>
            </a>
            <br/><br/>
            <h5 class="card-title">
                My Gallery
            </h5>
            <p class="card-text text-muted">
                <small>
                    In this project, I work with HTML and CSS to create a responsive page . 
                    The design is from devchallenge.io. 
                    In this page, you can see the gallery with profile details, number of posts, followers, and following. 
                </small> 
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