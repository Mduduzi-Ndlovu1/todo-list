import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import TodoList from "./components/TodoList";


function App() {
  const [todo, setTodo] = useState('');
  const [todoList,setTodoList] = useState([])

  return (
    <div>
      <Header/>
      <Form todo={todo} setTodo={setTodo} setTodoList={setTodoList} todoList={todoList}/>
      <TodoList setTodoList ={setTodoList} todoList={todoList} />

    </div>
  );
}

export default App;
