import React, { useState } from 'react';
import { ToDoInterface } from '../../interfaces/interfaces';
import ToDoComponent from '../ToDoComponent/ToDoComponent';

interface TaskListInterface {
  listOfToDoes: ToDoInterface[];
  toDolistSetter: (tasks: ToDoInterface[]) => void;
}

const ListOfToDoesComponent = ({
  listOfToDoes,
  toDolistSetter,
}: TaskListInterface) => {


  const deleteToDoHandler = (toDo: ToDoInterface) => {
    toDolistSetter(
      listOfToDoes.filter(
        (eachTodo: ToDoInterface) => eachTodo.todo_id !== toDo.todo_id
      )
    );
  };

  return (
    <div>
      {listOfToDoes.length <= 0
        ? 'nothing to do'
        : listOfToDoes.map((eachTodo) => (
            <div key={eachTodo.todo_id} className="eachRow" >
             
              <div key={eachTodo.todo_id}> {eachTodo.title}</div>
              <ToDoComponent toDo={eachTodo} listOfToDoes={listOfToDoes} toDolistSetter={toDolistSetter} />
              <button className="btn">Edit</button>
              <button
                className="btn"
                onClick={() => deleteToDoHandler(eachTodo)}
              >
                Delete
              </button>
            </div>
          ))}
    </div>
  );
};

export default ListOfToDoesComponent;
