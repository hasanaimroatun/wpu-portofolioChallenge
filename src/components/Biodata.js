import React from 'react'
import img1 from './pic/profilePhoto.png'
import {MdPhone, MdMail} from 'react-icons/md'

function Biodata() {
  return (
    <div 
        class="card mb-3 mt-3" 
        style={{
            width:"50rem", 
            height:"15rem", 
            marginLeft:"20px", 
            padding:"22px"
            }}>
        <div class="row g-0">
            <div class="col-md-3">
            <img src={img1} class="img-fluid rounded" alt="profile"/>
            </div>
            <div class="col-md-9">
            <div class="card-body">
                <div class="row g-0">
                    <div class="col-md-6">
                        <h5 
                            class="card-title" 
                            style={{
                                position:"relative", 
                                top:"-20px"
                                }}>
                                    Rodney Cotton
                        </h5>
                    </div>
                    <div class="col-md-4 offset-2">
                        <p class="card-text">
                            <small 
                                class="text-muted" 
                                style={{ 
                                    position:"relative", 
                                    top:"-15px"
                                    }}>
                                <MdMail /> rodney@example.com
                            </small>
                        </p>
                    </div>
                </div>
                <div class="row g-1">
                    <div class="col-md-6">
                        <p class="card-text">
                            <small 
                                class="text-muted" 
                                style={{
                                    position:"relative", 
                                    top:"-30px"
                                    }}>
                                Front-end developer
                            </small>
                        </p>
                    </div>
                    <div class="col-md-4 offset-2">
                        <p class="card-text">
                            <small 
                                class="text-muted" 
                                style={{
                                    position:"relative", 
                                    top:"-30px"
                                    }}>
                                <MdPhone /> (+603) 546 624 342
                            </small>
                        </p>
                    </div>
                </div>
                <p 
                    class="card-text text-muted" 
                    style={{
                        position:"relative", 
                        top:"-15px"
                        }}>
                        Self-motivated developer, who is willing to learn and create outstanding UI applications.
                </p>
                <p 
                    class="card-text text-muted" 
                    style={{
                        position:"relative", 
                        top:"-20px"
                        }}>
                        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Biodata