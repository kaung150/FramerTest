import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div>
      <motion.div
        animate={{
          y: [-20, 20], // Specify the range of vertical movement
          transition: {
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "reverse",
            duration: 1.5, // Duration of each animation cycle
          },
        }}
        className="mx-auto mt-40 bg-red-500 w-40 h-40 rounded-full "
      ></motion.div>
    </div>
  );
};

export default App;
