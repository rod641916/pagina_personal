import { useState } from "react";
import Todo from "./todo";

import "./todoApp.css";

export default function TodoApp() {
  //se usa jsx "permite insertar codigo html en js"//
  //Se creal el formulario con la caja de texto y el boton
  const [title, setTitle] = useState(""); //title vendria ser get y setTitle el set, arreglo vacio
  const [todos, setTodos] = useState([]); //arreglo vacio porque se van a ir agregando ahi

  //Funcion del evento para que cuadno se presione el boton se cambie en la caja de texto
  function handleClick(e) {
    e.preventDefault();
    setTitle("Rodrigo");
  }

  //funcion para la actualizacion del estado, event.target.value se accede
  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  //Funcion para actaulizar el estado del formulario
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(), //se asigna un id random
      title: title,
      complement: false,
    };

    //Arreglo para poder actualizar el estado
    const temp = [...todos];
    temp.unshift(newTodo); //unshift funcion para arreglar un elemento al incio de nuestro arreglo
    setTodos(temp);

    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id == id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form classname="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} classname="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          classname="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          //<div key={item.id}>{item.title}</div>
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          /> //Esta parte esta en todo.js se esta trayendo de ahi, realiza la mismo que la linea de arriba
        ))}
      </div>
    </div>
  );
}
