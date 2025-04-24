// Define el tipo de tarea
type Task = { text: string; completed: boolean };

// Define los tipos de acciones específicas
export type AddTaskAction = { type: "ADD_TASK"; payload: string }; // Para añadir tarea
export type DeleteTaskAction = { type: "DELETE_TASK"; payload: number }; // Para eliminar tarea
export type ToggleTaskAction = { type: "TOGGLE_TASK"; payload: number }; // Para alternar completado
export type EditTaskAction = {
  type: "EDIT_TASK";
  payload: { index: number; text: string };
}; // Para editar tarea

// Unión de todos los tipos de acción
export type Action =
  | AddTaskAction
  | DeleteTaskAction
  | ToggleTaskAction
  | EditTaskAction;

// Reducer con tipo estricto para la acción
export const reducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { text: action.payload, completed: false }];
    case "DELETE_TASK":
      return state.filter((_, index) => index !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task, index) =>
        index === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "EDIT_TASK":
      return state.map((task, index) =>
        index === action.payload.index
          ? { ...task, text: action.payload.text }
          : task
      );
    default:
      return state;
  }
};
