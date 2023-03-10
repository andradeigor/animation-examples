import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [caterories, setCategories] = useState(["Todos", "Contas", "Lavar"]);
  const [tasks, setTasks] = useState([
    "Limpar o carro",
    "Lavar louça",
    "Pagar a internet",
    "Pagar a faculdade",
  ]);
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-slate-300">
      <div className=" flex h-3/6 w-6/12 items-center justify-center p-5 px-10">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              exit={{ width: 0, backgroundColor: "#FFF" }}
              className="h-full rounded-l-md bg-slate-800 pt-8"
            >
              {caterories.map((item, index) => {
                return (
                  <div
                    className={`flex h-10 w-full items-center px-3 ${
                      item == category && "bg-white/20"
                    } text-base font-normal text-gray-100`}
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={`${
            open ? "rounded-r-md" : "rounded-md"
          } relative flex  h-full w-3/4 flex-col bg-white px-10 pb-10`}
        >
          <div className="flex h-2/6 w-full items-center justify-between ">
            <h1 className="text-3xl font-bold text-slate-800"> To do</h1>
            <button className="font-Inter text-3xl text-slate-600">+</button>
          </div>
          <div className=" flex h-full w-full flex-col  ">
            {tasks.map((item, index) => {
              return (
                <AnimatePresence>
                  <motion.div
                    variants={{
                      visible: (index) => ({
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.05 },
                      }),
                      hidden: (index) => ({
                        opacity: 0,
                        y: -50 * index,
                      }),
                    }}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    key={index}
                    className="flex h-1/6 w-full items-center border-b-[1px] border-slate-800/10"
                  >
                    <h1 className="text-lg font-normal text-slate-800">
                      {item}
                    </h1>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>
          <div className=" group absolute left-0 top-1/2 flex h-full w-8 -translate-y-1/2 items-center justify-center  ">
            <button
              className=" hidden h-16 w-[10px] rounded-full bg-slate-200 hover:border-2 hover:border-slate-400 group-hover:flex"
              onClick={() => setOpen(!open)}
            ></button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SideMenu;
