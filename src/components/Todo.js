import React  from 'react';

function Todo({ todo, delTodo, count}){

    return(
        <tr key={todo.id}>
            <th scope="row">{todo.count}</th>
            <td>{todo.value}</td>
            <td><button onClick = {()=>delTodo(todo.id)}>X</button></td>
        </tr>
    )
}

export default Todo