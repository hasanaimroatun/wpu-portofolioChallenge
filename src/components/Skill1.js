import React from 'react'

function Skill1() {
  return (
    <div 
        class="card mb-3 mt-3" 
            style={{
            width:"50rem", 
            height:"9rem", 
            marginLeft:"20px", 
            padding:"22px"
        }}>
        <h6 class="card-title">
            FRONT END
        </h6>
        <div class="row g-0"> 
            <div class="col-md-1">
                <p class="card-text text-muted">
                    <small>
                        React
                    </small>
                </p>
            </div>
            <div class="col-md-4">
                <div class="progress mt-2" style={{height:"10px"}}>
                    <div 
                        class="progress-bar" 
                        role="progressbar" 
                        aria-label="Basic example 10px high" 
                        style={{width: "70%"}} 
                        aria-valuenow="70" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    />
                </div>
            </div>
            <div class="col-md-2">
                <p 
                    class="card-text text-muted" 
                    style={{paddingLeft:"35px"}}
                >
                    <small>
                        Vue
                    </small>
                </p>
            </div>
            <div class="col-md-4">
            <div class="progress mt-2" style={{height:"10px"}}>
                    <div 
                        class="progress-bar" 
                        role="progressbar" 
                        aria-label="Basic example 10px high" 
                        style={{width: "70%"}} 
                        aria-valuenow="70" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    />
                </div>
            </div>
        </div>
        <div class="row g-0"> 
            <div class="col-md-1">
                <p class="card-text text-muted">
                    <small>
                        Javascript
                    </small>
                </p>
            </div>
            <div class="col-md-4">
            <div class="progress mt-2" style={{height:"10px"}}>
                    <div 
                        class="progress-bar" 
                        role="progressbar" 
                        aria-label="Basic example 10px high" 
                        style={{width: "80%"}} 
                        aria-valuenow="80" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    />
                </div>
            </div>
            <div class="col-md-2">
                <p 
                    class="card-text text-muted" 
                    style={{paddingLeft:"35px"}}
                >
                    <small>
                        Redux
                    </small>
                </p>
            </div>
            <div class="col-md-4">
            <div class="progress mt-2" style={{height:"10px"}}>
                    <div 
                        class="progress-bar" 
                        role="progressbar" 
                        aria-label="Basic example 10px high" 
                        style={{width: "80%"}} 
                        aria-valuenow="80" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    />
                </div>
            </div>
        </div>
        <div class="row g-0"> 
            <div class="col-md-1">
                <p class="card-text text-muted">
                    <small>
                        CSS
                    </small>
                </p>
            </div>
            <div class="col-md-4">
            <div class="progress mt-2" style={{height:"10px"}}>
                    <div 
                        class="progress-bar" 
                        role="progressbar" 
                        aria-label="Basic example 10px high" 
                        style={{width: "90%"}} 
                        aria-valuenow="90" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    />
                </div>
            </div>
            <div class="col-md-2">
                <p 
                    class="card-text text-muted" 
                    style={{paddingLeft:"35px"}}
                >
                    <small>
                        React Native
                    </small>
                </p>
            </div>
            <div class="col-md-4">
            <div class="progress mt-2" style={{height:"10px"}}>
                    <div 
                        class="progress-bar" 
                        role="progressbar" 
                        aria-label="Basic example 10px high" 
                        style={{width: "90%"}} 
                        aria-valuenow="90" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill1