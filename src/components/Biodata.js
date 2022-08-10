import React from 'react'
import img1 from './pic/profilePhoto.png'
import {MdPhone, MdMail} from 'react-icons/md'

function Biodata() {
  return (
    <div 
        class="card">
        <div class="row g-0">
            <div class="col-md-3 m-3">
            <img src={img1} class="img-fluid rounded" alt="profile"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <div class="row g-0">
                    <div class="col-md-6">
                        <h4 class="card-title" >
                            Rodney Cotton
                        </h4>
                        <p class="card-text text-muted">
                            Front-end developer
                        </p>
                    </div>
                    <div class="col-md-4 offset-2">
                        <p class="card-text text-muted">
                            <MdMail /> rodney@example.com
                        </p>
                        <p class="card-text text-muted">
                            <MdPhone /> (+603) 546 624 342
                        </p>
                    </div>
                </div>
                <br/>
                <div class="row g-0">
                    <p class="card-text text-muted">
                            Self-motivated developer, who is willing to learn and create outstanding UI applications.
                    </p>
                    <p class="card-text text-muted" >
                            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                    </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Biodata