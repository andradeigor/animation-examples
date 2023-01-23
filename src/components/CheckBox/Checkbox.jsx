import { CheckIcon } from "./CheckBoxIcon/CheckBoxIcon";
import { motion } from "framer-motion";
const CheckBox = ({ status, number }) => {
  const variants = {
    inactive: {
      backgroundColor: "#FFF",
      borderColor: "#E5E7EB",
      color: "#9CA3AF",
    },
    active: {
      backgroundColor: "#FFF",
      borderColor: "#0082F6",
      color: "#0082F6",
    },
    complete: {
      backgroundColor: "#0082F6",
      borderColor: "#0082F6",
      color: "#0082F6",
    },
  };
  return (
    <motion.div
      initial={false}
      variants={variants}
      animate={status}
      transition={{ duration: 0.2 }}
      className={` flex h-12 w-12 items-center justify-center rounded-full border-2 `}
    >
      <motion.h1 className={` text-xl font-medium`}>
        {status == "complete" ? (
          <CheckIcon className="h-6 w-6 stroke-[3] font-bold text-white" />
        ) : (
          number
        )}
      </motion.h1>
    </motion.div>
  );
};

export default CheckBox;
