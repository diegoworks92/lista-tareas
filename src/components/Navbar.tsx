import { useState } from "react";
import Buttons from "./design/Buttons";

type NavbarType = {
  setFilterType: (filter: string) => void; // Función para establecer el tipo de filtro
};

const Navbar = ({ setFilterType }: NavbarType) => {
  const [activeFilter, setActiveFilter] = useState<string>("all"); // Estado del botón activo

  const handleClick = (filter: string) => {
    setFilterType(filter); // Cambia el filtro en `App.tsx`
    setActiveFilter(filter); // Cambia el botón activo
  };

  return (
    <>
      <p>Filtrar tareas</p>
      <div className="bg-cyan-800 flex justify-between items-center p-4">
        <Buttons
          nombre="Todas"
          type="button"
          onclick={() => handleClick("all")}
          classname={activeFilter === "all" ? "bg-pink-700" : ""}
        />
        <Buttons
          nombre="Completadas"
          type="button"
          onclick={() => handleClick("completed")}
          classname={activeFilter === "completed" ? "bg-pink-700" : ""}
        />
        <Buttons
          nombre="Pendientes"
          type="button"
          onclick={() => handleClick("pending")}
          classname={activeFilter === "pending" ? "bg-pink-700" : ""}
        />
      </div>
    </>
  );
};

export default Navbar;
