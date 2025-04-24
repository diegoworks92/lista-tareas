import { useState } from "react";
import Buttons from "./design/Buttons";
import { Action } from "./reducer/reducer"; // Importa el tipo de acción desde el reducer

type ListType = {
  tasks: { text: string; completed: boolean; originalIndex: number }[];
  dispatch: (action: Action) => void; // Cambia `any` por `Action`
};

const List = ({ tasks, dispatch }: ListType) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Índice de la tarea en edición
  const [newText, setNewText] = useState<string>(""); // Nuevo texto de la tarea en edición

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.originalIndex}
          className={`${task.completed ? "line-through" : ""}`}
        >
          {/* Usar originalIndex para marcar como completada */}
          <Buttons
            nombre="✔"
            type="button"
            onclick={() =>
              dispatch({ type: "TOGGLE_TASK", payload: task.originalIndex })
            }
          />

          {/* Botón para editar */}
          {editingIndex === task.originalIndex ? (
            <>
              {/* Renderiza el input si estamos en modo edición */}
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)} // Actualiza el texto mientras el usuario escribe
                className="border-2 border-gray-300 rounded p-1"
              />
              <Buttons
                nombre="Guardar"
                type="button"
                onclick={() => {
                  dispatch({
                    type: "EDIT_TASK",
                    payload: { index: task.originalIndex, text: newText }, // Despacha la acción de edición
                  });
                  setEditingIndex(null); // Salir del modo edición
                  setNewText(""); // Limpia el texto
                }}
              />
            </>
          ) : (
            <>
              {/* Muestra el texto normal si no estamos en modo edición */}
              {task.text}
              <Buttons
                nombre="M"
                type="button"
                onclick={() => {
                  setEditingIndex(task.originalIndex); // Activa el modo edición
                  setNewText(task.text); // Inicializa el texto con el valor actual
                }}
              />
            </>
          )}

          {/* Botón para eliminar */}
          <Buttons
            nombre="❌"
            type="button"
            onclick={() =>
              dispatch({ type: "DELETE_TASK", payload: task.originalIndex })
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
