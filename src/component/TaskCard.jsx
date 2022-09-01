import {useContext  } from "react";

import { TaskContext } from "../context/TaskContext";

export const TaskCard = ({ task}) => {
  const {deleteTask} = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-5 rounded-md">
      <h1 className="text-xl font-sans"> {task.title} </h1>
      <p className="text-gray-500 text-sm"> {task.descripcion} </p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-5 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
};
