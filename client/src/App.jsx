import { useState, useEffect } from 'react'
import Events from './components/Events';
import './App.css'


function App() {

  return (
    <>
    <div>
      <form action="/events" method='POST'>
        <h1>Looking for a fun Event?</h1>
        <div>
          <label for='location'>Where To?</label><br />
          <input
            placeholder='Insert city'
            id='location'
          />
        </div>
        <div>
          <label for='date'>Date of your event?</label> <br/>
          <input
            placeholder='yyyy/dd/mm'
            id='date'
          />
        </div>
        <div>
          <label for='time'>What time is it?</label><br/>
          <input
            placeholder='00:00 PM'
            id='time'
          />
        </div>
      </form>
      </div>
      <Events />

    </>

  )
}

export default App
