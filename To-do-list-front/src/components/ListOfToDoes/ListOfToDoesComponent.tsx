import { ToDoInterface } from '../../interfaces/interfaces';
import ToDoComponent from '../ToDoComponent/ToDoComponent';
import './styles.css'
interface TaskListInterface {
  listOfToDoes: ToDoInterface[];
  toDolistSetter: (tasks: ToDoInterface[]) => void;
}


const ListOfToDoesComponent = ({
  listOfToDoes,
  toDolistSetter,
}: TaskListInterface) => {

  return (
    <div id="todoes-container">
      {listOfToDoes.length <= 0
        ? 'nothing to do'
        : listOfToDoes.map((eachTodo) => (
            <div key={eachTodo.todo_id} className="eachRow" >
              <ToDoComponent toDo={eachTodo} listOfToDoes={listOfToDoes} toDolistSetter={toDolistSetter} />
            </div>
          ))}
    </div>
  );
};

export default ListOfToDoesComponent;
