import Buttons from "./design/Buttons";

type ListType = {
  tasks: { text: string; completed: boolean }[]; // Array de tareas
  handleCheck: (index: number) => void; // Función para manejar el evento de verificación
  handleDelete: (index: number) => void; // Función para manejar el evento de eliminación
};
const List = ({ tasks, handleCheck, handleDelete }: ListType) => {
  return (
    <>
      <ul className="">
        {tasks.map((task, index: number) => (
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
    </>
  );
};

export default List;

/* 
<ul>
{tasks
  .filter((task) => task.completed === true)
  .map((task, index) => (
    <li key={index}>{task.text}</li>
  ))}
</ul> */
