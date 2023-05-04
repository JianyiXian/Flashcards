import { useState } from 'react'
import React from "react"
import './FlipCard.css'

const Flipcard = (props) => {
    const [showBack, setShowBack] = useState(false);
    const handleClick = () => {
        setShowBack(!showBack)
    }

    return (
        <div className='card-grid' onClick={handleClick}>
            <div className={`card ${showBack ? "flip" : ""}`}>
                <div className='front'>
                    <h1>{props.front}</h1>
                </div>
                <div className='back'>
                    <h1>{props.back}</h1>
                </div>
            </div>
        </div>
    )
}

export default Flipcard;