import React, { useState, useEffect } from 'react'
import firebase from '../../Config/Firebase/db_config'

export default function cardList() {
    const [ card, setCardList] = useState('');

    useEffect(()=>{
        const cardRef = firebase.database().ref('react-flashCards');
        cardRef.on('value', (snapshot)=>{
            const cards= snapshot.val();
            const cardList = [];
            for (let id in cards){
                cardList.push(cards[id]);
            }
            console.log(cardList);
            setCardList(cardList)
        });
    },[]);
    return (
        <div>
            
        </div>
    )
}
