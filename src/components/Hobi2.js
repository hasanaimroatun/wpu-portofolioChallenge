import React from 'react'
import img1 from './pic/hobi1.png'
import img2 from './pic/hobi2.png'
import img3 from './pic/hobi3.png'

function Hobi2() {
  return (
    <div class="card mb-3">
        <h5 
            class="card-title mt-3"
            style={{
                marginLeft:"18px"
            }}>
            Hobbies
        </h5>
        <div class="card-body">
            <div class="row g-0 mt-2" style={{columnGap:"1rem"}}>
                <img 
                    src={img1} 
                    class="img-fluid rounded col-md-12 col-sm-6 mb-3" 
                    alt="painting"
                />
                <div class=" col-md-12 col-sm-5">
                    <h6 class="card-title">
                        Painting
                    </h6>
                    <p 
                        class="card-text text-muted"
                        style={{
                            position:"relative",
                            top:"-8px"
                        }}>
                        <small>
                            Quisque feugiat malesuada molestie.
                        </small>
                    </p>
                </div>
            </div>
            <div class="row g-0 mt-4" style={{columnGap:"1rem"}}>
                <img 
                    src={img2} 
                    class="img-fluid rounded col-md-12 col-sm-6 mb-3"
                    alt="gardening"
                />
                <div class=" col-md-12 col-sm-5"> 
                    <h6 class="card-title">
                        Gardening
                    </h6>
                    <p 
                        class="card-text text-muted"
                        style={{
                            position:"relative",
                            top:"-8px"
                        }}>
                        <small>
                            Quisque feugiat malesuada molestie.
                        </small>
                    </p>
                </div>
            </div>
            <div class="row g-0 mt-4" style={{columnGap:"1rem"}}>
                <img 
                    src={img3} 
                    class="img-fluid rounded col-md-12 col-sm-6 mb-3"
                    alt="reading"
                />
                <div class=" col-md-12 col-sm-5"> 
                    <h6 class="card-title">
                        Reading Novels
                    </h6>
                    <p 
                        class="card-text text-muted"
                        style={{
                            position:"relative",
                            top:"-8px"
                        }}>
                        <small>
                            Quisque feugiat malesuada molestie.
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hobi2