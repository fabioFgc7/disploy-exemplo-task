import { createContext, useState , useEffect} from "react";
import { tasks as MiDatos } from "../data/Tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        descripcion: task.descripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(function () {
    setTasks(MiDatos);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}>
      {props.children}
    </TaskContext.Provider>
  );
};
