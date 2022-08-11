import React, {useState} from 'react'
import Project2 from './Project2'
import Project2b from './Project2b'
import Project2c from './Project2c'

function ButtonUtama() {
    const [isOpen, setIsOpen] = useState(false)
    const [tampilkanResponsive, setTampilkanResponsive] = useState(false)
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
        setTampilkanResponsive(true)
    }

  return (
    <div>
        <div 
            class="card mb-2"
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
        {tampilkanResponsive? 
                <div>
                    <div class="row g-3">
                        <div class="col">
                            <Project2c />
                        </div>
                        <div class="col">
                            <Project2 />
                        </div>
                        <div class="col">
                            <Project2b />
                        </div>
                    </div>
                </div>
                : null
        }
    </div>
  )
}

export default ButtonUtama