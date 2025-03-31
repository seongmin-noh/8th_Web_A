import { useTodo } from "../context/TaskContext";

export type Task = {
  id: number;
  text: string;
};

interface TaskItemProps {
  task: Task;
  isDone: boolean;
}

const TaskItem = ({ task, isDone }: TaskItemProps) => {
  const { handleComplete, handleDelete } = useTodo();

  const handleClick = () => {
    if (isDone) {
      handleDelete(task);
    } else {
      handleComplete(task);
    }
  };

  return (
    <li className="render-container__item">
      <span className="render-container__item-text">{task.text}</span>
      <button
        className="render-container__item-button"
        style={{ backgroundColor: isDone ? "#dc3545" : "#28a745" }}
        onClick={handleClick}
      >
        {isDone ? "삭제" : "완료"}
      </button>
    </li>
  );
};

export default TaskItem;
