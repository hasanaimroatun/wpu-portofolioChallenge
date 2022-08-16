import React from 'react'
import img1 from './pic/profile2.png'
import {MdPhone, MdMail} from 'react-icons/md'

function Biodata() {
  return (
    <div 
        class="card">
        <div class="row">
            <div class="col-md-3 col-sm-12">
                <div class="card-body">
                    <img src={img1} class="img-fluid rounded" alt="profile"/>
                </div>
            </div>
            <div class="col-md-8 col-sm-12">
            <div class="card-body">
                <div class="row g-0">
                    <div class="col-md-7 col-sm-6">
                        <h4 class="card-title" >
                            Imroatun Hasana
                        </h4>
                        <p class="card-text text-muted">
                            Front-end developer
                        </p>
                    </div>
                    <div class="col-md-5 col-sm-7 mt-2">
                        <p class="card-text text-muted">
                            <MdMail /> imroatunhasana@gmail.com
                        </p>
                        <p 
                            class="card-text text-muted" 
                            style={{position: "relative", marginTop: "-15px"}}
                        >
                            <MdPhone /> (+62) 82244814384
                        </p>
                    </div>
                </div>
                <br/>
                <div class="row g-0">
                    <p class="card-text text-muted">
                        Self-motivated developer, who is willing to learn and create outstanding UI applications.
                    </p>
                    <p class="card-text text-muted" >
                        Ready to help team achieve company goals. To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills
                    </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Biodata