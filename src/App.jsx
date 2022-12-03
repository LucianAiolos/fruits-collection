import './App.css';
import { useState } from 'react'
import { Nav } from './components/Nav'
import { Counter } from './components/Counter' // when exported as const
import Basket from './components/Basket'  // When exported as a default

function App() {
  const [fruits, setFruits] = useState({
    bananas: 0,
    apples: 0,
    tomatoes: 0,
  })

  const increaseFruits = (e) => {
    setFruits(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1
    }))
  } 

  const decreaseFruits = (e) => {
    console.log(fruits[e.target.name])
    if(fruits[e.target.name] === 0 ) {
      alert('You cannot decrease the amount of fruits below 0')
      return
    }
    setFruits(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] - 1
    }))
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome to my fruits counter app!</h1>
      </header>
      <Basket fruits={fruits}/>
      <Counter increaseFruits={increaseFruits} decreaseFruits={decreaseFruits}/>
      <Nav/>
    </div>
  );
}

export default App;
