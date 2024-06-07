import { useState } from 'react';
import { ToDoInterface } from '../../interfaces/interfaces';
import './styles.css';
import ModalEditPageComponent from '../ModalEditPageComponent/ModalEditPageComponent';

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
  // const [statusToDo, setToDoStatus] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const completionToDoHandler = () => {
    // setToDoStatus(!statusToDo);
    toDolistSetter((prev) => {
      return prev.map((eachTodo: ToDoInterface) => {
        if (eachTodo.todo_id === toDo.todo_id) {
          return { ...eachTodo, status: !eachTodo.status };
        } else return eachTodo;
      });
    });
    console.log(listOfToDoes);
  };

  const openModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
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
      <button className="btn" onClick={openModal}>
        Edit
      </button>
      <div>
        {modal ? (
          <ModalEditPageComponent
            closeFun={closeModal}
            toDoListSetter={toDolistSetter}
            toDo={toDo}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ToDoComponent;
