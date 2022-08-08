    import React from 'react'
    import img4 from './pic/blog.png'

    function Blog2() {
    return (
        <div 
            class="card mb-3 mt-3" 
            style={{
                width:"18rem",  
                marginLeft:"20px"
                }}>
            <div class="row g-0">
                <div class="col-md-5">
                    <div class="card-body">
                        <p class="card-text">
                            <small class="text-muted">
                                Blog
                            </small>
                        </p>
                        <h5 class="card-title">
                            How to organize your CSS
                        </h5>               
                    </div>
                </div>
                <div class="col-md-7 mt-4">
                    <img src={img4} class="img-fluid rounded-start" alt="blog"/>
                </div>
                <div class="card-body">
                <p class="card-text text-muted">
                    In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. 
                    Vivamus non volutpat nisl, a luctus mi.  
                </p>
                <p class="card-text text-muted">
                    Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                </p>
                <a 
                    href="https://github.com/hasanaimroatun/wpu-TeamPageChallenge/blob/main/index.html" 
                    class="card-link"
                    style={{textDecoration:"none"}}>
                    <small>
                        dev.to
                    </small>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Blog2