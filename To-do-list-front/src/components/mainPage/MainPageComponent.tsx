import { useState } from 'react';
import './styles.css';

const MainPageComponent = () => {
  const [toDo, setToDo] = useState<string>('');
  const [toDoesList, setTodoesList] = useState<string[]>([]);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(event.target.value);
    console.log(toDo);
  };

  const addToDoHandler = () => {
    setTodoesList([...toDoesList, toDo]);
    setToDo('');
  };

  return (
    <div id="container">
      <div id="to-does-container">
        <input
          className="input"
          type="text"
          placeholder="text what needs to be done"
          onChange={inputHandler}
          value={toDo}
        ></input>
        <button onClick={addToDoHandler}> add task </button>
      </div>
      {toDoesList.length <= 0
        ? 'nothing to do'
        : toDoesList.map((eachTodo) => (
            <div key={Math.floor(Math.random() * 1000) + 1}> {eachTodo}</div>
          ))}
    </div>
  );
};

export default MainPageComponent;
