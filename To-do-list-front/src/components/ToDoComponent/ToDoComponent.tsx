import { useState } from 'react';
import { ToDoInterface } from '../../interfaces/interfaces';
import './styles.css';

interface TaskInterface {
  toDo: ToDoInterface;
  listOfToDoes: ToDoInterface[];
  toDolistSetter: (tasks: ToDoInterface[]) => void;
}

const ToDoComponent = ({
  toDo,
  listOfToDoes,
  toDolistSetter,
}: TaskInterface) => {
  const [statusToDo, setToDoStatus] = useState<boolean>(false);

  const completionToDoHandler = () => {
    setToDoStatus(!statusToDo);
    toDolistSetter((prev) => {
      return prev.map((eachTodo: ToDoInterface) => {
        if (eachTodo.todo_id === toDo.todo_id) {
          return { ...eachTodo, status: !eachTodo.status };
        } else return eachTodo;
      });
    });
    console.log(listOfToDoes);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={completionToDoHandler}
        checked={toDo.status ? true : false}
      />

      <div className={toDo.status ? 'cross-line' : 'each-row '}>
        {toDo.title}
      </div>
    </div>
  );
};

export default ToDoComponent;
