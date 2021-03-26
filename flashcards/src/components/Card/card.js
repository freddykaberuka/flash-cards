import React from 'react';
import './card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">

                <div className="front">
                <div className="eng">{props.question}</div>
            </div>
            <div className="front back">
                <div className="pin">{props.answer}</div>
            </div>
            
        </div>
    </div>
)

export default Card