import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export function TasksList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tarea</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}
