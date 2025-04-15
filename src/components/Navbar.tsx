import Buttons from "./design/Buttons";

const Navbar = ({ setFilterType }) => {
  return (
    <>
      <p>filtrar tareas</p>
      <div className="bg-cyan-800 flex justify-between items-center p-4">
        {/* Botones para alternar entre todas, completadas y pendientes */}
        <Buttons
          nombre="Todas"
          type="button"
          onclick={() => setFilterType("all")}
        />
        <Buttons
          nombre="Completadas"
          type="button"
          onclick={() => setFilterType("completed")}
        />
        <Buttons
          nombre="Pendientes"
          type="button"
          onclick={() => setFilterType("pending")}
        />
      </div>
    </>
  );
};

export default Navbar;
