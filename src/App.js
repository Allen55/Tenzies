import React from 'react';
import Confetti from 'react-confetti';
import Die from './Die';
import './App.css';
import './style.css';


export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  
  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(Math.ceil(Math.random() * 6))
      }
      return newDice
  }
  
  const diceElements = dice.map(die => <Die value={die} />)
  
  return (
      <main>
          <div className="dice-container">
              {diceElements}
          </div>
      </main>
  )
}