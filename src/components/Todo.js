import React, {useState} from 'react';
import ListItem from './ListItem';

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList)

    setTodo("") // to clear input text
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input value={todo} onChange={handleChange} type="text" className='border'></input>
      <button type='submit' className='border'> Add Task</button>
    </form>

    {todoList.map((item) => (
      <ListItem key={item} name={item}>
       
      </ListItem>
    ))}
  </div>
}