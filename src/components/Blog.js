import React from 'react'
import img4 from './pic/blog.png'

function Blog() {
  return (
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-8 col-sm-7">
                <div class="card-body">
                    <p class="card-text">
                        <small class="text-muted">
                                Blog
                        </small>
                        </p>
                        <h5 class="card-title col-md-4 col-sm-8">
                                How to organize your CSS
                        </h5>
                        <p class="card-text text-muted">
                                In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. 
                                Vivamus non volutpat nisl, a luctus mi.  
                        </p>
                        <p class="card-text text-muted">
                                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                        </p>
                        <a 
                            href="https://not-found-challenge-fd107.web.app" 
                            class="card-link"
                            style={{textDecoration:"none"}}>
                            <small>
                                dev.to
                            </small>
                        </a>               
                </div>
            </div>
            <div class="col-md-4 col-sm-5 mt-1">
                <img src={img4} class="img-fluid rounded-start" alt="blog"/>
            </div>
        </div>
    </div>
  )
}

export default Blog