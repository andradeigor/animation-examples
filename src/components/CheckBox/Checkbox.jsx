import { CheckIcon } from "./CheckBoxIcon/CheckBoxIcon";

const CheckBox = ({ status, number }) => {
  return (
    <div
      className={` flex h-12 w-12 items-center justify-center rounded-full border-2 ${
        status == "complete"
          ? "border-blue-500 bg-blue-500"
          : status == "active"
          ? "border-blue-500 bg-white text-blue-500"
          : "border-gray-200 bg-white text-gray-400"
      }`}
    >
      <h1
        className={`${
          status == "active" ? "text-blue-500" : "text-gray-400"
        } text-xl font-medium`}
      >
        {status == "complete" ? (
          <CheckIcon className="h-8 w-8 stroke-[2.4] font-bold text-white" />
        ) : (
          number
        )}
      </h1>
    </div>
  );
};

export default CheckBox;
