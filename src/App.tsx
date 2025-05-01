import { useState, useReducer, useEffect } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import List from "./components/List";
import { reducer } from "./components/reducer/reducer";
import { CiBoxList } from "react-icons/ci";
function App() {
  const dataUseState = [
    { text: "tarea 1", completed: false },
    { text: "tarea 2", completed: false },
    { text: "tarea 3", completed: false },
  ];
  const [tasks, dispatch] = useReducer(reducer, [], () => {
    // Recupera tareas desde Local Storage al cargar la página
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : dataUseState;
  });
  const [task, setTask] = useState("");
  const [filterType, setFilterType] = useState("all"); // Estado para el tipo de filtro

  // Guarda las tareas en Local Storage cuando cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (task.trim() !== "") {
      /* setTasks([...tasks, { text: task, completed: false }]); */ // Añade una nueva tarea con estado inicial
      dispatch({ type: "ADD_TASK", payload: task });
      setTask(""); // Limpia el input
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = 17; // Longitud máxima del texto
    const value = e.target.value;
    // Limitar la entrada al máximo número de letras permitido
    if (value.length <= maxLength) {
      setTask(value.trimStart()); // Actualiza el estado solo si no se supera el límite
    }
  };

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
    <div className="bg-cyan-800 sm:w-96 w-80 min-h-72 rounded-2xl p-2 ">
      <div className="flex">
        <CiBoxList className="text-3xl mt-1 mr-2" />
        <h1 className="text-3xl font-bold underline">Lista de Tareas </h1>
      </div>
      <Navbar setFilterType={setFilterType} />
      <Form
        value={task}
        /* onchange={(e) => setTask(e.target.value)} */
        onchange={handleChange} // Captura el valor del input
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
