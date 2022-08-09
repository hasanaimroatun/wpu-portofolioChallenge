import React from 'react'
import Biodata from './Biodata'
import Skill2 from './Skill2'
import Hobi2 from './Hobi2'
import Pengalaman1 from './Pengalaman1'
import ButtonUtama2 from './ButtonUtama2'
import ButtonUtama from './ButtonUtama'

function Portofolio1() {
  return (
    <div>
        <div class="row g-0">
            <Biodata />
        </div>
        <div class="row g-0">
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
                    <ButtonUtama2 />
                </div>
                <div class="row g-0">
                    <ButtonUtama />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portofolio1