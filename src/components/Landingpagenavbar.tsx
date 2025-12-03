import atom from "../assets/atom.png";

const Landingpagenavbar = () => {
  return (
    <nav className="h-[10vh] items-center flex px-10 justify-between bg-transparent text-white">
      <div className="font-semibold text-2xl flex items-center">
        <img src={atom} alt="Atom logo" className="w-8 h-8 mr-4" />
        <h1>Quantify</h1>
      </div>
      <div className="flex text-xl gap-x-20">
        <h1 className="border-b-2 border-transparent cursor-pointer hover:border-blue-400 hover:text-blue-500 transition-all duration-100">
          Home
        </h1>
        <h1 className="border-b-2 border-transparent cursor-pointer hover:border-blue-400 hover:text-blue-500 transition-all duration-100">
          About
        </h1>
        <h1 className="border-b-2 border-transparent cursor-pointer hover:border-blue-400 hover:text-blue-500 transition-all duration-100">
          Contact
        </h1>
      </div>
      <div className="flex text-xl gap-x-20">
        <h1 className="font-bold border-b-2 border-transparent cursor-pointer hover:border-blue-400 hover:text-blue-500 transition-all duration-100">
          Login
        </h1>
      </div>
    </nav>
  );
};

export default Landingpagenavbar;
