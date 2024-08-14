import React from 'react'
import Card from './Card'
import virasat from './images/virasat.jpg'
import uttarayan from './images/uttarayan.jpg'
import anubhav from './images/anubhav.jpg'

const Events = () => {
  return (
    <>
      <div id="events" className='space-y-4'>
        <h1 id='event-heading' className='text-transparent text-center py-2 font-bold text-5xl'>Our Events</h1>
        <div className='grid items-center justify-center gap-y-4 p-4'>
          <a href='https://virasat-eta.vercel.app/'>
            <Card title='Virasat' image={virasat} content='Virasat is the event where we reconnect with Indian culture in a deep, enriching manner. For our audience to be absolutely bedazzled by the utmost heights of Indian classical art, music, and culture in its rich, diverse forms. Virasat is not just an event, it is a cultural experience.' />
          </a>
          <Card title='Uttarayan' image={uttarayan} content={`It's the Annual Kite festival organized by the club on the occasion of Makar Sankranti portraying the age old tradition of kite flying which truly builds an unparalleled atmosphere of joy.`} />

          <Card title='Anubhav' image={anubhav} content={`It's an Art workshop organized by us in collaboration with the BMEP for the children belonging to the deprived sections of the society with a purpose to bring a smile on their little faces and give them an opportunity to learn and rejoice`} />

        </div>
    
      </div>
    </>
  )
}

export default Events
