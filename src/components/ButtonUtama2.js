import React, { useState } from 'react'
import Blog from './Blog'

function ButtonUtama2() {
    const [tampilkanBlog, setTampilkanBlog] = useState(true)

    const handleClick = () => {
        setTampilkanBlog(!tampilkanBlog)
    }
  return (
    <div>
        <div 
            class="card mb-2"
            style={{cursor: "pointer"}}
            onClick={handleClick}>
            <div class="card-body">
                <p class="card-text text-muted">
                    Blog (1)
                </p>
            </div>
        </div>
        {tampilkanBlog? <Blog /> : null}
    </div>
  )
}

export default ButtonUtama2