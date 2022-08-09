import React, { useState } from 'react'
import Blog from './Blog'

function ButtonUtama2() {
    const [tampilkanBlog, setTampilkanBlog] = useState()

    const handleClick = () => {
        setTampilkanBlog(
            <Blog />
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
                    Blog (1)
                </p>
            </div>
        </div>
        {tampilkanBlog}
    </div>
  )
}

export default ButtonUtama2