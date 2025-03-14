import Butters from './components/Butters/Butters';
import Form from './components/Form'
import Search from './components/Search'
import Delete from './components/Delete';
import './App.css'


function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    
     <Search />
      <Delete />
      <Form />
      <Butters />

    </div>

  )
}

export default App
