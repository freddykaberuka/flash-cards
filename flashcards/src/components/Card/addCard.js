import React, { useState } from 'react';
import firebase from '../../Config/Firebase/db_config'
const  AddCard= () => {
    const [question, setQ] = useState('')
    // const [answer, setA] = useState('')
    const handleOnChange=(e) => {
        setQ(e.target.value);
    };
    const createCard = ()=>{
        const cardRef = firebase.database().ref('react-flashCards');
        const reactapp = {
            question,
            complete:false,
        };
        cardRef.push(reactapp);
    };
    return (
        // <form action='' className='add-form'>
            <div className='form-control'>
                <label>Question</label>
                <input type='text' value={question}  onChange={handleOnChange}/>
            </div>
            {/* <div className='form-control'>
            <label>Add Answer</label>
                <input type='text' placeholder='add Answer' value={answer} onChange={(e)=> setA(e.targert.value)}/>
            </div> */}
            
            {/* <input type='submit' value='Save Card' className='btn-block'/> */}
            <button onClick={createCard}>Save</button>
        // </form>
        
    //  );
}
 
export default AddCard;