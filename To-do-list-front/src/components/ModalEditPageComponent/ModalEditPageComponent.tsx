import { useState } from 'react';
import './modalEditPageComponent.css';
import { ToDoInterface } from '../../interfaces/interfaces';

interface CloseModal {
  toDo: ToDoInterface;
  closeFun: () => void;
  toDoListSetter: (tasks: ToDoInterface[]) => void;
}

const ModalEditPageComponent = ({
  toDo,
  closeFun,
  toDoListSetter,
}: CloseModal) => {
  const [editedTitle, setEditedTitle] = useState<string>('');

  const editInputTitleHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditedTitle(event.target.value);
  };

  const editTitleHandler = () => {
    toDoListSetter((prev) => {
      return prev.map((eachToDo: ToDoInterface) => {
        if (eachToDo.todo_id === toDo.todo_id) {
          if (editedTitle.length === 0) {
            return eachToDo;
          } else {
            return { ...eachToDo, title: editedTitle };
          }
        } else return eachToDo;
      });
    });

    closeFun();
  };

  return (
    <div id="modal-container">
      <div id="flex-container-modal">
        <input id="edit-input"
          type="text"
          placeholder="text edit"
          value={editedTitle}
          onChange={editInputTitleHandler}
        />
        <button id="editBtn-modal" onClick={editTitleHandler}>EditModal</button>
      </div>
    </div>
  );
};

export default ModalEditPageComponent;
