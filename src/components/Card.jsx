import React from 'react'

function Card(props) {
  return (
    <>
        <div className="container mx-auto w-[90%] sm:w-[70%] md:w-full md:h-[35vh] flex flex-col md:flex-row items-center justify-center border-2 border-black rounded-md">
            <img className='md:h-full sm:aspect-[5/2.9] lg:w-1/2 xl:w-1/3 w-full aspect-auto' src={props.image} alt={props.title}  />
            <div className="content p-4 lg:pt-10 space-y-2 md:space-y-4 h-full">
                <h1 className='text-md font-extrabold text-center md:text-justify md:text-lg'>{props.title}</h1>
                <p className='md:text-base text-lg font-semibold sm:text-md'> {props.content}</p>
            </div>
        </div>
    </>
  )
}

export default Card