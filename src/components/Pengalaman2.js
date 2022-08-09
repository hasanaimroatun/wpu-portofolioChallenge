import React from 'react'
import img1 from './pic/adidas logo.png'
import img2 from './pic/hennes logo.png'
import img3 from './pic/nivea logo.png'

function Pengalaman2() {
  return (
    <div 
        class="card mb-3 mt-3" 
        style={{
            width:"18rem",  
            marginLeft:"20px"
        }}>
        <h5 
            class="card-title mt-3"
            style={{
                paddingLeft:"15px"
            }}>
            Experiences
        </h5>
        <div class="card-body">
            <div class="row g-0">
                <div class="col-md-2 mt-4">
                    <img src={img1} class="img-fluid rounded" alt="adidas logo"/>
                </div>
                <div class="col-md-9 offset-1">
                    <p 
                        class="card-text"
                        style={{
                            position:"relative",
                            top:"10px"
                        }}>
                        <small class="text-muted">
                            Feb 2017 - Current
                        </small>
                    </p>
                    <h6 class="card-title">
                        Front-end developer
                    </h6>
                    <p class="card-text text-muted">
                        <small>
                            Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
                            Quisque feugiat malesuada molestie.
                        </small>
                    </p>
                </div>
            </div>
            <br/>
            <div class="row g-0">
                <div class="col-md-2 mt-4">
                    <img src={img2} class="img-fluid rounded" alt="hnm logo"/>
                </div>
                <div class="col-md-9 offset-1">
                    <p 
                        class="card-text"
                        style={{
                            position:"relative",
                            top:"10px"
                        }}>
                        <small class="text-muted">
                            Aug 2016 - Feb 2018
                        </small>
                    </p>
                    <h6 class="card-title">
                        Full-stack developer
                    </h6>
                    <p class="card-text text-muted">
                        <small>
                            Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
                            Quisque feugiat malesuada molestie.
                        </small>
                    </p>
                </div>
            </div>
            <br/>
            <div class="row g-0">
                <div class="col-md-2 mt-4">
                    <img src={img3} class="img-fluid rounded" alt="nivea logo"/>
                </div>
                <div class="col-md-9 offset-1">
                    <p 
                        class="card-text"
                        style={{
                            position:"relative",
                            top:"10px"
                        }}>
                        <small class="text-muted">
                            Jun 2015 - Aug 2016
                        </small>
                    </p>
                    <h6 class="card-title">
                        Junior front-end developer
                    </h6>
                    <p class="card-text text-muted">
                        <small>
                            Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
                            Quisque feugiat malesuada molestie.
                        </small>
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Pengalaman2