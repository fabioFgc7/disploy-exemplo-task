import React from "react";
import { TasksList } from "./component/TaskList";
import { TaskForm } from "./component/TaskForm";

function App() {
  return (
    <main  className="bg-zinc-800 h-screen ">
      <div className="container mx-auto p-10" >
      <TaskForm />
      <TasksList />
      </div>
    </main>
  );
}

export default App;
