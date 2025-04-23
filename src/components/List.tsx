import { useState } from "react";
import Buttons from "./design/Buttons";

type ListType = {
  tasks: { text: string; completed: boolean; originalIndex: number }[];
  dispatch: (action: { type: string; payload?: any }) => void;
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
          {task.text}

          {/* Botón para editar */}
          {editingIndex === task.originalIndex ? (
            <Buttons
              nombre="Guardar"
              type="button"
              onclick={() => {
                dispatch({
                  type: "EDIT_TASK",
                  payload: { index: task.originalIndex, text: newText },
                });
                setEditingIndex(null);
                setNewText("");
              }}
            />
          ) : (
            <Buttons
              nombre="M"
              type="button"
              onclick={() => {
                setEditingIndex(task.originalIndex);
                setNewText(task.text);
              }}
            />
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
