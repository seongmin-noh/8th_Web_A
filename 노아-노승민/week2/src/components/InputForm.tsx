import { useTodo } from "../context/TaskContext";

const InputForm = () => {
  const { input, handleChange, handleSubmit } = useTodo();

  return (
    <form onSubmit={handleSubmit} className="todo-container__form">
      <input
        type="text"
        className="todo-container__input"
        placeholder="할 일 입력"
        value={input}
        onChange={handleChange}
        required
      />
      <button type="submit" className="todo-container__button">
        할 일 추가
      </button>
    </form>
  );
};

export default InputForm;
