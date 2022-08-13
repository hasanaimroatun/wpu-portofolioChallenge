import React from 'react'
import img2 from "./pic/teamPage.png"

function Project2b() {
  return (
    <div class="card  col-md-12 col-sm-6">
        <div class="card-body">
            <img src={img2} class="img-fluid rounded mb-2" alt="profile"/>
            <a 
                href="https://github.com/hasanaimroatun/wpu-TeamPageChallenge/blob/main/index.html" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #HTML
                </small>
            </a>
            <a 
                href="https://github.com/hasanaimroatun/wpu-TeamPageChallenge/blob/main/css/style.css" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #CSS
                </small>
            </a>
            <a 
                href="https://github.com/hasanaimroatun/wpu-TeamPageChallenge/blob/main/css/style.css" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #responsive
                </small>
            </a>
            <br/><br/>
            <h5 class="card-title">
                Team Page
            </h5>
            <p class="card-text text-muted">
                <small>
                    In this project, I work with HTML and CSS to create a responsive page . 
                    The design is from devchallenge.io. 
                    In this page, you can see the team creative crew with profile photo, name, and position.
                </small> 
            </p>
            <br/>
            <span>
                <button type="button" class="btn btn-primary">
                    <a 
                        href="https://team-page-challenge-c263b.web.app" 
                        class="card-link" 
                        style={{color:"inherit", textDecoration:"none"}}>
                            Demo
                    </a>
                </button>
            </span>
            <span style={{marginLeft:"10px"}}>
                <button type="button" class="btn btn-outline-primary">
                    <a 
                        href="https://github.com/hasanaimroatun/wpu-TeamPageChallenge" 
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

export default Project2b