
import { createContext, useContext, useState, ReactNode } from "react";
import { Task } from "../components/TaskItem";

interface TodoContextType {
  todos: Task[];
  doneTasks: Task[];
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleComplete: (task: Task) => void;
  handleDelete: (task: Task) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTask: Task = { id: Date.now(), text: input.trim() };
    setTodos([...todos, newTask]);
    setInput("");
  };

  const handleComplete = (task: Task) => {
    setTodos(todos.filter((t) => t.id !== task.id));
    setDoneTasks([...doneTasks, task]);
  };

  const handleDelete = (task: Task) => {
    setDoneTasks(doneTasks.filter((t) => t.id !== task.id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        doneTasks,
        input,
        handleChange,
        handleSubmit,
        handleComplete,
        handleDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo는 TodoProvider 내부에서 사용되어야 합니다.");
  }
  return context;
};
