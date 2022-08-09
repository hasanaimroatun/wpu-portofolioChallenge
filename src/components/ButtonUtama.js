import React, {useState} from 'react'
import Project2 from './Project2'
import Project2b from './Project2b'
import Project2c from './Project2c'

function ButtonUtama() {
    const [isOpen, setIsOpen] = useState(false)
    const [tampilkanResponsive, setTampilkanResponsive] = useState()
    const [tampilkanReact, setTampilkanReact] = useState()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClick2 = () => {
        setTampilkanReact(
            <div>
                {setTampilkanResponsive()}
            </div>
        )
    }

    const handleClick3 = () => {
        setTampilkanResponsive(
            <div>
                <div class="row g-0" style={{width:"60rem"}}>
                    <div class="col-md-4">
                        <Project2c />
                    </div>
                    <div class="col-md-4">
                        <Project2 />
                    </div>
                    <div class="col-md-4">
                        <Project2b />
                    </div>
                </div>
                {setTampilkanReact()}
            </div>
        )
    }
  return (
    <div>
        <div 
            class="card mb-3"
            style={{
                width:"58rem",
                marginLeft:"20px"
            }}
            onClick={handleClick}> 
            <div class="card-body">
                <p class="card-text text-muted">
                    Project (3)
                </p>
                {isOpen?
                    <div>
                        <button 
                            type="button" 
                            class="btn btn-outline-primary"
                            onClick={handleClick2}
                        >
                            React
                        </button>
                        <button 
                            type="button" 
                            class="btn btn-outline-primary" 
                            style={{marginLeft:"10px"}}
                            onClick={handleClick3}
                        >
                            Responsive
                        </button>
                    </div>
                    : null
                }
            </div>
        </div>
        {tampilkanReact}
        {tampilkanResponsive}
    </div>
  )
}

export default ButtonUtama