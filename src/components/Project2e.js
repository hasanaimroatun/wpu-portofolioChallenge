import React from 'react'
import img3 from './pic/windbnb.png'

function Project2e() {
  return (
    <div class="card col-md-12 col-sm-12">
        <div class="card-body">
            <img src={img3} class="img-fluid rounded mb-2" alt="profile"/>
            <a 
                href="https://github.com/hasanaimroatun/wpu-windbnbChallenge2/blob/master/public/index.html" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #HTML
                </small>
            </a>
            <a 
                href="https://github.com/hasanaimroatun/wpu-windbnbChallenge2/blob/master/src/components/myStyle.css" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #CSS
                </small>
            </a>
            <a 
                href="https://github.com/hasanaimroatun/wpu-windbnbChallenge2" 
                class="card-link"
                style={{color:"inherit", textDecoration:"none"}}>
                <small>
                    #react
                </small>
            </a>
            <br/><br/>
            <h5 class="card-title">
                Windbnb
            </h5>
            <p class="card-text text-muted">
                <small>
                    In this project, I work with HTML, CSS, and Javascript in React to create a responsive page . 
                    The design is from devchallenge.io. 
                    This page consist of apartment lists in Findland with details: name, rating, apartment type, and super host.
                    You can filter the location and number of guests with the given button.
                </small> 
            </p>
            <br/>
            <span>
                <button type="button" class="btn btn-primary">
                    <a 
                        href="https://wind-bnb-challenge.web.app" 
                        class="card-link" 
                        style={{color:"inherit", textDecoration:"none"}}>
                            Demo
                    </a>
                </button>
            </span>
            <span style={{marginLeft:"10px"}}>
                <button type="button" class="btn btn-outline-primary">
                    <a 
                        href="https://github.com/hasanaimroatun/wpu-windbnbChallenge2" 
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

export default Project2e