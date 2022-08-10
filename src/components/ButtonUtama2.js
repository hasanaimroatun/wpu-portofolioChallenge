import React, { useState } from 'react'
import Blog from './Blog'

function ButtonUtama2() {
    const [tampilkanBlog, setTampilkanBlog] = useState(false)

    const handleClick = () => {
        setTampilkanBlog(!tampilkanBlog)
    }
  return (
    <div>
        <div 
            class="card mb-2"
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