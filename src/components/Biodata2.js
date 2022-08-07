import React from 'react'
import img1 from './pic/profilePhoto.png'
import {MdPhone, MdMail} from 'react-icons/md'

function Biodata2() {
  return (
    <div class="card" style={{width:"18rem", height:"33rem", padding:"22px", marginLeft:"17rem"}}>
        <img src={img1} class="card-img-top rounded" alt="profile"/>
        <div 
            class="card-body"
            style={{
                position:"relative",
                left:"-15px"
            }}>
            <h5 class="card-title">
                    Rodney Cotton
            </h5>
            <p class="card-text">
                <small 
                    class="text-muted"
                    style={{
                        position:"relative",
                        top:"-10px"
                    }}>
                    Front-end developer
                </small>
            </p>
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
            <p class="card-text">
                <small 
                    class="text-muted"
                    style={{
                        position:"relative",
                        top:"-33px"
                    }}>
                    <MdPhone /> (+603) 546 624 342
                </small>
            </p>
            <p 
                class="card-text text-muted"
                style={{
                    position:"relative",
                    top:"-30px"
                }}>
                Self-motivated developer, who is willing to learn and create outstanding UI applications.
            </p>
        </div>
    </div>
  )
}

export default Biodata2