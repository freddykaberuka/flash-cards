import React, { useState } from 'react';
import firebase from '../../Config/Firebase/db_config'
import './card.css';
const  AdCard= () => {
    const [question, setQ] = useState('')
    const [answer, setA] = useState('')
    const handleOnChange=(e) => {
        setQ(e.target.value);
        
    };
    const handleOnAnswer=(e) => {
        setA(e.target.value);
    };
    
    const createCard = ()=>{
        const cardRef = firebase.database().ref('react-flashCards');
        const reactapp = {
            question,
            answer,
        };
        
        cardRef.push(reactapp);
        
    };
    return(
        <div>
        <input type='text' value={question} placeholder="Enter Question" onChange={handleOnChange} className="inputs"/> 
        <input type='text' value={answer} placeholder="Enter Answer" onChange={handleOnAnswer} className="inputs"/> 
        <button onClick={createCard} className="buttonAdd">create card</button>
        </div>
   );
}
export default AdCard;