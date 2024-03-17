import { motion } from "framer-motion";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]
       ${className || ""} text-base  `}
    >
      <motion.img
        src={loading}
        alt="Loading"
        className="w-5 h-5 mr-4"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      AI is generating
    </div>
  );
};
export default Generating;
