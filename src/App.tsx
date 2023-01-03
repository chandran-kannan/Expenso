import Button from './Components/Button'
import Hero from './Components/Hero'

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
    console.log("BUTTON CLICKED")
  }
  
  return (
    <div className="App">
      <div className='flex flex-col'>
      <Button btnClick={btnClick} type="Primary">Sign Up </Button><br/>
      <Button type="secondry">Login</Button><br/>
      <Button type="text">Forgot Password?</Button>
      </div>
      <div>
      <Hero text="Sign Up"/>
      </div>
    </div>
  )
}

export default App
