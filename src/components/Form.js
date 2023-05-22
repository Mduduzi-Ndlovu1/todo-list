import React,{useState} from 'react';
import styles from '../style.module.css';
import shortid from 'shortid'

const Form = ({todo, setTodo, setTodoList, todoList}) => {

    const handleChange = (e) => {
        setTodo(e.target.value);
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList,{name:todo,id:shortid.generate()}])
        setTodo('')
       
        
    }
  return (
    <div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
            <div className='px-8'>
                <input value={todo} onChange={handleChange} className={styles.todoInput} type="text" placeholder='Please Enter Text here' />
                <button type='submit' className={styles.todoBtn}>Add Task</button>
            </div>
            
        </form>
    </div>
  )
}

export default Form;