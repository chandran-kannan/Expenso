import Button from './Components/Button'
import Hero from './Components/Header'

function App() {

  /**
   * Button types?
   * 1. Primary
   * 2. Secondary
   * 3. Text
   * 4. buttonClick
   * 5. Children
   */

  const btnClick = () => {
    //function goes here
  }
  
  return (
    <div className="App">
      <div className='flex flex-col'>
      <Button onClick={btnClick} variant="Primary">Sign Up </Button>
      <Button variant="secondry">Login</Button>
      <Button variant="text">Forgot Password?</Button>
      </div>
      <div>
      <Hero title="Sign Up"/>
      </div>
    </div>
  )
}

export default App
