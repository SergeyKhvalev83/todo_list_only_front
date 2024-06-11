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

  const deleteToDoHandler = () => {
    toDolistSetter(
      listOfToDoes.filter(
        (eachTodo: ToDoInterface) => eachTodo.todo_id !== toDo.todo_id
      )
    );
  };

  return (
    <div className="check-title-edit">
        <input
          type="checkbox"
          onChange={completionToDoHandler}
          checked={toDo.status ? true : false}
        />

        <div className={toDo.status ? 'cross-line each-row' : 'each-row'}>
          {toDo.title}
        </div>
        <button className="edit-btn" onClick={openModal}>
          Edit
        </button>

        <button className="delete-btn" onClick={deleteToDoHandler}>
          Delete
        </button>

      <div id="modal-parent">
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
