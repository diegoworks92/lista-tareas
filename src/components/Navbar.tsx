const Navbar = () => {
  return (
    <>
      <p>filtrar tareas</p>
      <div className="bg-cyan-800 flex justify-between items-center p-4">
        <p>todas</p>
        <p>completadas</p>
        <p>pendientes</p>
      </div>
    </>
  );
};

export default Navbar;
