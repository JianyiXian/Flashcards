import { useState } from 'react'
import React from "react"
import './FlipCard.css'

const Flipcard = () => {

    const cards = [
        { id: 0, front: "猫", back: "cat", color: "" },
        { id: 1, front: "狗", back: "dog", color: "" },
        { id: 2, front: "吃", back: "eat", color: "" },
        { id: 3, front: "你好", back: "hello" },
        { id: 4, front: "再见", back: "bye" },
        { id: 5, front: "谢谢", back: "Thank you" }
    ];

    const [showBack, setShowBack] = useState(false);
    const [currentCardId, setCurrentCardId] = useState(cards[0].id);
    const [currentVal, setCurrentVal] = useState('')

    const handleCardClick = () => {
        setShowBack(!showBack)
    }

    const handleNextClick = () => {
        setShowBack(false)
        const nextIndex = currentCardId + 1
        setCurrentCardId(cards[nextIndex].id)

    };

    const handlePreviousClick = () => {
        setShowBack(false)
        const prevIndex = currentCardId - 1
        setCurrentCardId(cards[prevIndex].id)
    };

    const handleRamdomClick = () => {
        setShowBack(false)
        // Generate the nextIndex randomly
        const randomIndex = Math.floor(Math.random() * cards.length)
        setCurrentCardId(cards[randomIndex].id)

    };

    const checkAnswer = () => {
        if (currentVal.toLowerCase() == currentCard.back) {
            alert("Correct")
        }
        else {
            alert("Wrong")
        }
    };

    const handleChange = (e) => {
        setCurrentVal(e.target.value)
    };

    const currentCard = cards.find((card) => card.id === currentCardId)

    return (
        <div>

            <div className='card-grid' onClick={handleCardClick}>
                <div className={`card ${showBack ? "flip" : ""}`}>
                    <div className='front'>
                        <h1>{currentCard.front}</h1>
                    </div>
                    <div className='back'>
                        <h1>{currentCard.back}</h1>
                    </div>
                </div>
            </div>
            <div>
                <input type="text" value={currentVal} placeholder='Guess the Chinese meaning...' onChange={handleChange} className='textbox' />
                <button onClick={checkAnswer}>Check answer</button>
            </div>
            <h3>{currentCardId + 1}/{cards.length}</h3>
            <button onClick={handlePreviousClick} disabled={currentCardId - 1 < 0 ? true : ""}>Previous</button>
            <button onClick={handleNextClick} disabled={currentCardId + 1 === cards.length ? true : ""}>Next</button>
            <button onClick={handleRamdomClick}>Shuffle</button>
        </div>
    )
}

export default Flipcard;