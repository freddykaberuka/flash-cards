import { useState } from 'react';
const  AddCard= () => {
    const [question, setQ] = useState('')
    const [answer, setA] = useState('')
    return (
        <form action='' className='add-form'>
            <div className='form-control'>
                <label>Question</label>
                <input type='text' placeholder='add Question' value={question} onChange={(e)=> setQ(e.target.value)}/>
            </div>
            <div className='form-control'>
            <label>Add Answer</label>
                <input type='text' placeholder='add Answer' value={answer} onChange={(e)=> setA(e.targert.value)}/>
            </div>
            
            <input type='submit' value='Save Card' className='btn btn-block'/>
            
        </form>
     );
}
 
export default AddCard;