// import React from 'react'

// function GalleryImg(props) {
//     const img = require(`./images/${props.src}.jpg`)
//     return (
//         <>
//             <div className={`md:p-2 p-1`}>
//                 <img alt="gallery" className="h-full w-full object-cover object-top" src={img} />
//             </div>
//         </>
//     )
// }
import React from 'react';

function GalleryImg(props) {
    const img = require(`./images/${props.src}.jpg`);
    return (
        <div className="md:p-3 p-1" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <img
                alt="gallery"
                className="w-full object-cover"
                src={img}
                style={{
                     border:"2px solid black",
                     borderRadius:"15px",
                     height: '400px' }} // Adjust this value as needed
            />
            <form action='/delete'style={{margin:"10px"}}>
            <button type="button" class="btn btn-outline-danger">Delete</button>
            </form>
            </div>
    );
}

export default GalleryImg;


// export default GalleryImg