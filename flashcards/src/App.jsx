import { useState } from 'react'
import './App.css'
import FlipCard from './components/FlipCard';


const App = () => {
  const cards = [
    { id: 0, front: "猫", back: "cat" },
    { id: 1, front: "狗", back: "dog" },
    { id: 2, front: "吃", back: "eat" },
    { id: 3, front: "你好", back: "hello" },
    { id: 4, front: "再见", back: "bye" },
    { id: 5, front: "谢谢", back: "Thank you" }
  ];

  const [currentCardId, setCurrentCardId] = useState(cards[1].id);
  const handleNextClick = () => {
    // Generate the nextIndex randomly
    const nextIndex = Math.floor(Math.random() * cards.length)
    setCurrentCardId(cards[nextIndex].id)
  };

  const currentCard = cards.find((card) => card.id === currentCardId)

  return (
    <div>
      <img src="https://blog.lingobus.com/wp-content/uploads/2018/12/learn-chinese-in-5-minutes.jpg" alt="" />
      <h1>Guessing Chinese Word</h1>
      <h2>How good of a Chinese learner are you? Test it!!</h2>
      <h3>Number of cards:{cards.length}</h3>
      <FlipCard front={currentCard.front} back={currentCard.back} />
      <button onClick={handleNextClick}>Next</button>
    </div>

  )
}

export default App
