type ButtonsType = {
  nombre: React.ReactNode; // Puede ser un string o un componente de icono
  onclick?: () => void;
  type: "button" | "submit";
  classname?: string;
};

const Buttons = ({ nombre, onclick, type, classname }: ButtonsType) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`bg-amber-600 m-1 p-1 rounded-md cursor-pointer hover:bg-amber-400 hover:text-black ${classname}`}
    >
      {nombre}
    </button>
  );
};

export default Buttons;
