import React from 'react'
import Biodata from './Biodata'
import Skill2 from './Skill2'
import Hobi2 from './Hobi2'
import Pengalaman1 from './Pengalaman1'
import ButtonUtama from './ButtonUtama'
import CreatedBy from './CreatedBy'

function Portofolio1() {
  return (
    <div class="row g-0">
        <div class="col-md-10  col-sm-10 offset-1">
            <div class="row g-0">
                <div class="col-md-11 mb-2 mt-2">
                    <Biodata />
                </div>
            </div>
            <div class="row g-0" style={{columnGap:"0.5rem"}}>
                <div class="col-md-3">
                    <div class="row g-0">
                        <Skill2 />
                    </div>
                    <div class="row g-0">
                        <Hobi2 />
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row g-0">
                        <Pengalaman1 />
                    </div>
                    <div class="row g-0">
                        <ButtonUtama />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <CreatedBy />
        </div>
    </div>
  )
}

export default Portofolio1