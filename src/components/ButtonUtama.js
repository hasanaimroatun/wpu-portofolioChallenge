import React, {useState} from 'react'
import Project2 from './Project2'
import Project2b from './Project2b'
import Project2c from './Project2c'
import Project2d from './Project2d'
import Project2e from './Project2e'

function ButtonUtama() {
    const [isOpen, setIsOpen] = useState(false)
    const [tampilkanResponsive, setTampilkanResponsive] = useState(false)
    const [tampilkanReact, setTampilkanReact] = useState(false)
    const [tampilkanSemua, setTampilkanSemua] = useState(true)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClick1 = () => {
        setTampilkanSemua(true)
        setTampilkanReact(false)
        setTampilkanResponsive(false)
    }

    const handleClick2 = () => {
        setTampilkanReact(true)
        setTampilkanSemua(false)
        setTampilkanResponsive(false)
    }

    const handleClick3 = () => {
        setTampilkanResponsive(true)
        setTampilkanSemua(false)
        setTampilkanReact(false)
    }

  return (
    <div>
        <div 
            class="card mb-2"
            style={{cursor: "pointer"}}
            onClick={handleClick}> 
            <div class="card-body">
                <p class="card-text text-muted">
                    Project (5)
                </p>
                {isOpen?
                    <div>
                        <button 
                            type="button" 
                            class="btn btn-outline-primary" 
                            onClick={handleClick1}
                        >
                            All Projects
                        </button>
                        <button 
                            type="button" 
                            class="btn btn-outline-primary"
                            style={{marginLeft:"10px"}}
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
        {tampilkanSemua? 
            <div>
                <div class="row g-3 mb-3">
                    <div class="col">
                        <Project2d />
                    </div>
                    <div class="col">
                        <Project2e />
                    </div>
                </div>
                <div class="row g-3 mb-3">
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
        {tampilkanReact?
                    <div>
                        <div class="row g-3">
                            <div class="col">
                                <Project2d />
                            </div>
                            <div class="col">
                                <Project2e />
                            </div>
                        </div>
                    </div>
                    : null
        }
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