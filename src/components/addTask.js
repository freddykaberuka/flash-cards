import { useState } from 'react';
const  AddTask= () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder]= useState(false)
    return (
        <form action='' className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='add Task' value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className='form-control'>
            <label>Add Date</label>
                <input type='text' placeholder='add Day' value={day} onChange={(e)=> setDay(e.targert.value)}/>
            </div>
            <div className='form-control form-control-check'>
            <label>Set Reminder</label>
                <input type='checkBox' placeholder='set Reminder' value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
            
        </form>
     );
}
 
export default AddTask;