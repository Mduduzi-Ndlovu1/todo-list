import React from 'react';
import styles from '../style.module.css';


const Todo = ({todoItem,todoList,setTodoList}) => {
    const deleteTodo = () => {
        setTodoList(        todoList.filter((item) => item.id !== todoItem.id)
        )
    }
  return (
    <div>
        <div className={styles.todoItem}>
            <h3 className={styles.todoName}>{todoItem.name}</h3>
            <button onClick={deleteTodo} className={styles.DeleteBtn}>Task completed</button>
        </div>
    </div>
  )
}

export default Todo