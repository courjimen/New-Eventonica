import Butters from './components/Butters/Butters';
import Form from './components/Form'
import Search from './components/Search'
import Delete from './components/Delete';
import './App.css'


function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">WHIPPED SHEA BUTTER</h1><br/>
      <p className="text-center mb-8"> Raw shea butter is the base of my whipped body and hair butters, the texture is fluffy and light. Shea butter is utilized for many things in my self-care regime. I love it's versatility and use it for my hair and skin. The best part is we can customize your fragrances and create any blend you would like!</p>
      <div >
        <Search />
        <Delete />
      </div><br/>
      <div className="flex flex-row items-center justify-center space-x-4">
        <Form />
        <Butters />
      </div>
    </div>

  )
}

export default App
