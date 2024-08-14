import React from 'react'

function GalleryImg(props) {
    const img = require(`./images/${props.src}.jpg`)
    return (
        <>
            <div className={`md:p-2 p-1`}>
                <img alt="gallery" className="h-full w-full object-cover object-top" src={img} />
            </div>
        </>
    )
}

export default GalleryImg