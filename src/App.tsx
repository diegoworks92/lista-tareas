import { useState, useReducer } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import List from "./components/List";
import { reducer } from "./components/reducer/reducer";
function App() {
  const dataUseState = [
    { text: "tarea 1", completed: false },
    { text: "tarea 2", completed: false },
    { text: "tarea 3", completed: false },
  ];
  /*   const [tasks, setTasks] = useState(dataUseState); */
  const [tasks, dispatch] = useReducer(reducer, dataUseState);
  const [task, setTask] = useState("");
  const [filterType, setFilterType] = useState("all"); // Estado para el tipo de filtro

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== "") {
      /* setTasks([...tasks, { text: task, completed: false }]); */ // Añade una nueva tarea con estado inicial
      dispatch({ type: "ADD_TASK", payload: task });
      setTask(""); // Limpia el input
    }
  };
  /* 
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
 */
  // 🔎 Filtrar tareas según el estado `filterType`
  const filteredTasks = tasks
    .map((task, index) => ({ ...task, originalIndex: index })) // Agregamos el índice original
    .filter(
      (task) =>
        filterType === "completed"
          ? task.completed // Mostrar completadas
          : filterType === "pending"
          ? !task.completed // Mostrar pendientes
          : true // Mostrar todas
    );

  return (
    <div className="bg-cyan-800">
      <h1 className="text-3xl font-bold underline">Lista de Tareas </h1>
      <Navbar setFilterType={setFilterType} />
      <Form
        value={task}
        onchange={(e) => setTask(e.target.value)}
        onsubmit={handleClick}
      />

      {/* Pasamos solo las tareas filtradas al componente List */}
      <List
        tasks={filteredTasks}
        dispatch={dispatch} // Pasamos la función dispatch al componente List
      />
    </div>
  );
}

export default App;
