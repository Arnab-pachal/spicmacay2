import React from 'react'
import GalleryImg from './GalleryImg'

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-16 mx-auto ">
          <div className="flex flex-col items-center justify-center w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Journey through some auspicious moments captured in lenses</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Embark on a visual journey through our captivating photo gallery. Each snapshot tells a unique story, inviting you to discover the artistry in every image. Welcome to a world where moments come to life through the lens.</p>
          </div>
          <div className='picture-layout grid'>
            <GalleryImg src="24" />
            <GalleryImg src="18" />
            <GalleryImg src="27" />
            <GalleryImg src="23" />
            <GalleryImg src="19" />
            <GalleryImg src="28" />
            <GalleryImg src="29" />
            <GalleryImg src="25" />
            <GalleryImg src="15" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
