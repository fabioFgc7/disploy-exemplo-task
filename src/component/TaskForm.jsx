import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export function TaskForm() {
  const [title, setTitle] = useState();
  const [descripcion, setdescripcion] = useState("");
  const {createTask} = useContext(TaskContext)

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(title, descripcion);
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setdescripcion("");
  };

  return (
    <div className="max-w mx-auto">
      <form onSubmit={handlerSubmit} className="bg-zinc-600 p-10 mb-5 rounded-md" >
      <h1 className="text-2xl font-bold text-white mb-3">Escribe tu tarea</h1>
        <input className="bg-zinc-300 p-3 w-full mb-2"
          type={"text"}
          placeholder='Escribe'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea className="bg-zinc-300 p-3 w-full mb-2"
          onChange={(e) => setdescripcion(e.target.value)}
          placeholder='Escribe la desc..'
          value={descripcion}></textarea>
        <button className="bg-blue-600 px-2 py-1 rounded-md text-white">Save</button>
      </form>
    </div>
  );
}
