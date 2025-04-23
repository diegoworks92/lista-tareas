type Task = { text: string; completed: boolean };

export const reducer = (
  state: Task[],
  action: { type: string; payload?: any }
) => {
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
