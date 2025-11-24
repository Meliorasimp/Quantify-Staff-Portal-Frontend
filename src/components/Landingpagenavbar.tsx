import atom from "../assets/atom.png";
import { motion } from "framer-motion";
const Landingpagenavbar = () => {
  return (
    <nav className="h-[10vh] items-center flex px-10 justify-between bg-transparent">
      <motion.div
        className="font-semibold text-2xl flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
      >
        <img src={atom} alt="Atom logo" className="w-8 h-8 mr-4" />
        <h1>Quantify</h1>
      </motion.div>
      <div className="flex text-xl gap-x-20">
        <motion.h1
          className="border-b-2 border-transparent cursor-pointer hover:border-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.5 }}
        >
          Home
        </motion.h1>
        <motion.h1
          className="border-b-2 border-transparent cursor-pointer hover:border-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.5 }}
        >
          About
        </motion.h1>
        <motion.h1
          className="border-b-2 border-transparent cursor-pointer hover:border-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.5 }}
        >
          Contact
        </motion.h1>
      </div>
      <motion.div
        className="flex text-xl gap-x-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
      >
        <h1>Login</h1>
      </motion.div>
    </nav>
  );
};

export default Landingpagenavbar;
