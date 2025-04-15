type ButtonsType = {
  nombre: string;
  onclick?: () => void;
  type: "button" | "submit";
  classname?: string;
};

const Buttons = ({ nombre, onclick, type, classname }: ButtonsType) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`bg-amber-600 m-1 p-1 rounded-md cursor-pointer ${classname}`}
    >
      {nombre}
    </button>
  );
};

export default Buttons;
