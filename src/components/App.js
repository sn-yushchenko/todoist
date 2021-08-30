import React, {useState} from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';


import 'bootstrap/dist/css/bootstrap.css';

function App() {
   const [count, setCount] = useState(0);// count of item on list
    const [todos, setTodos] = useState([]);// itemes todos

    const addTodo = (itemsTodo) => {
            const newItem = {
                id: Math.random().toString(36).substr(2,5),
                value: itemsTodo
            }
            setTodos([...todos, newItem]);
            setCount(prev => prev + 1);
    }

    const delTodo = ()=> {

    }


  return (
    <div className="App">
      <header>
          <div>Count in my ItemList: {count}</div>
      </header>
        <div>
            <AddTodo addTodo = {addTodo}/>
            {todos.map((todo)=> {return (<Todo key={todo.id} todo={todo.value} />)})}

        </div>

    </div>
  );
}

export default App;
