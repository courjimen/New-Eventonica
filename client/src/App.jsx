import Butters from './components/Butters';
import Form from './components/Form'
import Search from './components/Search'
import { useState } from 'react'
import './App.css'


function App() {
const [deleteButter, setDeleteButter] = useState('');

const removeButter = () => {
  fetch('http://localhost:3000/butters', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ scents: deleteButter }),
    })
    .then((res) => res.json())
    .then((data) => {
      alert('Butter removed!');
    })
    .catch((error) => {
      console.error('Error', error)
      alert('Unable to remove butter')
    })
  }

  return (
    <>
      <label>Find a Scent: </label>
      <input
        placeholder='Insert Scent'

      />
<div>
      <label> Remove a Scent: </label>
      <input
        placeholder='Insert scent to delete'
        type='text'
        value={deleteButter}
        onChange={(e) => setDeleteButter(e.target.value)}
      />
      <button onClick={removeButter}>Delete Butter</button>
      </div>
      <Form />
      <Butters />

    </>

  )
}

export default App
