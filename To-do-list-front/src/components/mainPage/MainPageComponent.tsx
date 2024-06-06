import { useState } from 'react';
import './styles.css';
import { TaskInterface } from '../../interfaces/interfaces';

const MainPageComponent = () => {
  const [toDoTitle, setToDoTitle] = useState<string>('');

  const [toDoesList, setTodoesList] = useState<TaskInterface[]>([]);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoTitle(event.target.value);
  };

  const addToDoHandler = () => {
    const newToDo: TaskInterface = {
      title: toDoTitle,
      todo_id: Math.floor(Math.random() * 1000) + 1,
    };
    setTodoesList([...toDoesList, newToDo]);
    setToDoTitle('');
  };

  const deleteToDoHandler = (toDo: TaskInterface) => {
    setTodoesList(
      toDoesList.filter((eachTodo: TaskInterface) => eachTodo.todo_id !== toDo.todo_id)
    );
  };

  const editToDoHandler = (toDo: TaskInterface) =>{

    
  }

  return (
    <div id="container">
      <div id="to-does-container">
        <input
          className="input"
          type="text"
          placeholder="text what needs to be done"
          onChange={inputHandler}
          value={toDoTitle}
        ></input>
        <button onClick={addToDoHandler}> add task </button>
      </div>
      {toDoesList.length <= 0
        ? 'nothing to do'
        : toDoesList.map((eachTodo) => (
            <div className="eachRow">
              <input type="checkbox" className="checkBox" />
              <div key={eachTodo.todo_id}> {eachTodo.title}</div>
              <button className="btn">Edit</button>
              <button className="btn" onClick={()=>deleteToDoHandler(eachTodo)}>Delete</button>
            </div>
          ))}
    </div>
  );
};

export default MainPageComponent;
