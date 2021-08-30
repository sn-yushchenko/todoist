import React, {useState} from 'react';

function AddTodo({addTodo}){

    const [value, setValue] = useState('');

    return(
        <div>
            <input onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Enter todos on this day" id="add" value={value}/>
            <label className="form-check-label" htmlFor="add"></label>
            <button onClick = {()=>addTodo(value)} type="submit" className="btn btn-primary">Submit</button>
        </div>
        )


}

export default AddTodo;