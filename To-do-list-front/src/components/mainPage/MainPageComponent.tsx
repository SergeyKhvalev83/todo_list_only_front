import { useState } from 'react';
import './styles.css';
import { ToDoInterface } from '../../interfaces/interfaces';
import ListOfToDoesComponent from '../ListOfToDoes/ListOfToDoesComponent';

const MainPageComponent = () => {
  const [toDoTitle, setToDoTitle] = useState<string>('');
  const [toDoesList, setTodoesList] = useState<ToDoInterface[]>([]);


  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoTitle(event.target.value);
    console.log(toDoTitle)
  };

  const addToDoHandler = () => {
    const newToDo: ToDoInterface = {
      title: toDoTitle,
      todo_id: Math.floor(Math.random() * 1000) + 1,
      status:false
    };
    setTodoesList([...toDoesList, newToDo]);
    setToDoTitle('');
  };

 
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
      <ListOfToDoesComponent listOfToDoes={toDoesList} toDolistSetter={setTodoesList} />
    </div>
  );
};

export default MainPageComponent;
