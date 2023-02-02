import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  const todoetextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredText = todoetextInputRef.current?.value; // if fails, return null => string | undefined
    const enteredText = todoetextInputRef.current!.value; // 100% sure, use !
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  }

  return <form className={classes.form} onSubmit={submitHandler}>
    <label htmlFor='text'>Todo text</label>
    <input id="text" ref={todoetextInputRef} type='text' />
    <button>Add Todo</button>
  </form>
};

export default NewTodo;