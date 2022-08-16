import React from 'react'
import img1 from './pic/ssc logo.png'
import img2 from './pic/g2 logo.png'


function Pengalaman1() {
  return (
    <div class="card mb-2">
        <h5 
            class="card-title mt-3"
            style={{
                paddingLeft:"15px"
            }}>
            Experiences
        </h5>
        <div class="card-body">
            <div class="row g-0" style={{rowGap:"2rem"}}>
                <div 
                    class="col-md-1 col-sm-2 mt-3"
                    style={{
                        paddingRight:"15px"
                    }}>
                    <img src={img1} class="img-fluid rounded" alt="adidas logo"/>
                </div>
                <div class="col-md-3 col-sm-10">
                    <p class="card-text">
                        <small class="text-muted">
                            Jan 2019 - Sept 2019
                        </small>
                    </p>
                    <h6 class="card-title">
                        Front Desk Receptionist
                    </h6>
                    <p 
                        class="card-text text-muted"
                        style={{
                            paddingRight:"30px"
                        }}>
                        <small>
                            Maintained files and records by implementing effective filing systems that boosted efficiency and organization.
                            Resolved customer issues quickly and notified supervisor immediately when problems escalated.
                        </small>
                    </p>
                </div>
                <div 
                    class="col-md-1 col-sm-2 mt-3"
                    style={{
                        paddingRight:"15px"
                    }}>
                    <img src={img1} class="img-fluid rounded" alt="hnm logo"/>
                </div>
                <div class="col-md-3 col-sm-10">
                    <p class="card-text">
                        <small class="text-muted">
                            Jan 2018 - Sept 2019
                        </small>
                    </p>
                    <h6 class="card-title">
                        Biology Tutor
                    </h6>
                    <p 
                        class="card-text text-muted"
                        style={{
                            paddingRight:"30px"
                        }}>
                        <small>
                            Reinforced concepts of basic and upper-level biology courses by searching for gaps in learning.
                            Created skill-based assessments to test student mastery of required skills of focus.
                        </small>
                    </p>
                </div>
                <div 
                    class="col-md-1 col-sm-2 mt-3"
                    style={{
                        paddingRight:"15px"
                    }}>
                    <img src={img2} class="img-fluid rounded" alt="nivea logo"/>
                </div>
                <div class="col-md-3 col-sm-10">
                    <p class="card-text">
                        <small class="text-muted">
                            Nov 2017 - Jan 2019
                        </small>
                    </p>
                    <h6 class="card-title">
                        Biology Tutor
                    </h6>
                    <p 
                        class="card-text text-muted"
                        style={{
                            paddingRight:"30px"
                        }}>
                        <small>
                            Reinforced concepts of basic and upper-level biology courses by searching for gaps in learning.
                            Created skill-based assessments to test student mastery of required skills of focus.                        
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pengalaman1