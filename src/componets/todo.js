import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    function handleSubmit(e) {
      e.preventDefault();
    }

    const [newValue, setNewValue] = useState(item.title);
    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <button onClick={() => setIsEdit(true)}>Editar</button>
        <button onClick={(e) => onDelete(item.id)}>Eliminar</button>
      </div>
    );
  }
  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
