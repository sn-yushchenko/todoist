import React, {useState} from 'react';

function AddTodo({addTodo}){

    const [value, setValue] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return(
        <div className="head">
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-auto">
                    <input  onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Enter todos on this day" id="add" value={value}/>
                </div>
                <div className="col-auto">
                    <button  type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        )


}

export default AddTodo;