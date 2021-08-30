import React, {useState} from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';


import 'bootstrap/dist/css/bootstrap.css';

function App() {
   const [count, setCount] = useState(0);// count of item on list
    const [todos, setTodos] = useState([]);// itemes todos

    const addTodo = (itemsTodo) => {
        setCount(prev => prev + 1);
            const newItem = {
                id: Math.random().toString(36).substr(2,5),
                value: itemsTodo,
                count: count+1
            }
            setTodos([...todos, newItem]);

    }

    const delTodo = (id)=> {
            setTodos([...todos.filter((todo)=>todo.id !== id)]);
            setCount(prev => prev - 1);
    }


  return (
    <div className="App">
      <header className="count container">
          <div>Count in my ItemList: {count}</div>
      </header>
        <div>
            <AddTodo addTodo = {addTodo}/>
            <table className="table table-striped table-hover table-info">
            <thead>
            <tr>
                <th scope="col">Number</th>
                <th scope="col">Task</th>
                <th scope="col">X</th>
            </tr>
            </thead>
            <tbody>
            {todos.map((todo)=> {return (<Todo todo={todo} delTodo ={delTodo}/>)})}
            </tbody>
            </table>

        </div>

    </div>
  );
}

export default App;
