import TaskItem, { Task } from "./TaskItem";

interface TaskListProps {
  title: string;
  tasks: Task[];
  isDone: boolean;
}

const TaskList = ({ title, tasks, isDone }: TaskListProps) => {
  return (
    <div className="render-container__section">
      <h2 className="render-container__title">{title}</h2>
      <ul className="render-container__list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} isDone={isDone} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
