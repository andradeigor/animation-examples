import CheckBox from "../components/CheckBox/Checkbox";
import { useState } from "react";
const MultiStep = () => {
  const [status, setStatus] = useState([
    "active",
    "inactive",
    "inactive",
    "inactive",
  ]);
  const [active, setActive] = useState(0);
  console.log(active, status);
  const handleContinue = () => {
    if (active + 1 >= status.length) {
      const newStatus = [...status];
      newStatus[3] = "complete";
      setStatus(newStatus);
      setActive(4);
      return;
    }
    const newStatus = [...status];
    newStatus[active + 1] = "active";
    for (let index = 0; index < active + 1; index++) {
      newStatus[index] = "complete";
    }
    setActive(active + 1);
    setStatus(newStatus);
  };
  const handleBack = () => {
    if (active == 0) {
      return;
    }
    const newActive = active - 1;
    const newStatus = [];
    for (let index = 0; index < status.length; index++) {
      if (index > newActive) {
        newStatus.push("inactive");
      } else if (index == newActive) {
        newStatus.push("active");
      } else {
        newStatus.push("complete");
      }
    }
    setActive(newActive);
    setStatus(newStatus);
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-zinc-500">
      <div className="flex h-2/5 w-[30%] flex-col rounded-3xl bg-white p-5 px-10 shadow-md">
        <div className="flex h-1/6 w-full items-center justify-between">
          {status.map((statu, index) => (
            <CheckBox key={index} status={statu} number={index + 1} />
          ))}
        </div>
        <div className="mt-5 flex h-full w-full flex-col  gap-y-5 pt-10">
          <div className="h-8 w-2/5 rounded-md bg-gray-100"></div>
          <div className="h-4 w-8/12 rounded-md bg-gray-100"></div>
          <div className="h-4 w-10/12 rounded-md bg-gray-100"></div>
          <div className="h-4 w-11/12 rounded-md bg-gray-100"></div>
        </div>
        <div className="flex h-24 w-full items-center justify-between  px-10">
          <div>
            <button
              onClick={handleBack}
              className=" rounded-2xl px-6 py-1 font-Inter text-xl font-semibold text-gray-300 transition-colors duration-300 ease-out hover:bg-gray-300 hover:text-white"
            >
              Back
            </button>
          </div>
          <div>
            <button
              onClick={handleContinue}
              className="h-10 w-32 rounded-3xl bg-blue-500 font-Inter text-xl font-semibold text-white transition-all duration-300 ease-out hover:scale-105"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MultiStep;
