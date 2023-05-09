import { useState } from 'react'
import './App.css'
import FlipCard from './components/FlipCard';


const App = () => {

  return (
    <div>
      <img src="https://blog.lingobus.com/wp-content/uploads/2018/12/learn-chinese-in-5-minutes.jpg" alt="" />
      <h1>Guessing Chinese Word</h1>
      <h2>How good of a Chinese learner are you? Test it!!</h2>

      <FlipCard />

    </div>

  )
}

export default App
