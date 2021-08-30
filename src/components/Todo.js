import React from 'react';

function Todo({key, todo}){
    return(
        <div>
            <ul>
                <li key={key}>{todo}</li>
            </ul>
        </div>
    )
}

export default Todo