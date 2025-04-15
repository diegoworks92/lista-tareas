import Buttons from "./design/Buttons";

type FormType = {
  onsubmit: (e: React.FormEvent) => void; // Función para manejar el evento de envío del formulario
  value: string; // Valor del input
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Función para manejar el cambio en el input
};

const Form = ({ onsubmit, value, onchange }: FormType) => {
  return (
    <>
      <form action="" onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="Agregar tarea"
          value={value}
          onChange={onchange} // Captura el valor del input
        />
        <Buttons nombre="Añadir tarea" type="submit" />
      </form>
    </>
  );
};

export default Form;
