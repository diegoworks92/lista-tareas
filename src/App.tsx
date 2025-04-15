import { useState } from "react";
import Buttons from "./components/design/Buttons";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import List from "./components/List";

function App() {
  const dataUseState = [
    { text: "tarea 1", completed: false },
    { text: "tarea 2", completed: false },
    { text: "tarea 3", completed: false },
  ];
  const [tasks, setTasks] = useState(dataUseState);
  const [task, setTask] = useState("");
  const [filterType, setFilterType] = useState("all"); // Estado para el tipo de filtro

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]); // Añade una nueva tarea con estado inicial
      setTask(""); // Limpia el input
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleDelete = (indexToDelete: number) => {
    setTasks(tasks.filter((_, i) => i !== indexToDelete));
  };

  const handleCheck = (indexCheck: number) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexCheck ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // 🔎 Filtrar tareas según el estado `filterType`
  const filteredTasks =
    filterType === "completed"
      ? tasks.filter((task) => task.completed) // Muestra solo completadas
      : filterType === "pending"
      ? tasks.filter((task) => !task.completed) // Muestra solo pendientes
      : tasks; // Muestra todas

  return (
    <div className="bg-cyan-800">
      <h1 className="text-3xl font-bold underline">Lista de Tareas </h1>
      <Navbar setFilterType={setFilterType} />
      <Form value={task} onchange={handleChange} onsubmit={handleClick} />
      {/*       <ul className="">
        {tasks.map((task, index) => (
          <li key={index} className={`${task.completed ? "line-through" : ""}`}>
            <Buttons
              nombre="Listo"
              type="button"
              onclick={() => handleCheck(index)}
            />
            {task.text}
            <Buttons
              nombre="Eliminar"
              type="button"
              onclick={() => handleDelete(index)}
            />
          </li>
        ))}
      </ul>
      <ul>
        {filled.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul> */}
      {/* Botones para alternar entre todas, completadas y pendientes */}

      {/* Pasamos solo las tareas filtradas al componente List */}
      <List
        tasks={filteredTasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
