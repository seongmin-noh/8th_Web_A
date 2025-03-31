import "./App.css";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import { useTodo } from "./context/TaskContext";

function App() {
  const { todos, doneTasks } = useTodo();

  return (
    <div className="todo-container">
      <h1 className="todo-container__header">YONG TODO</h1>
      <InputForm />
      <div className="render-container">
        <TaskList title="할 일" tasks={todos} isDone={false} />
        <TaskList title="완료" tasks={doneTasks} isDone={true} />
      </div>
    </div>
  );
}

export default App;
