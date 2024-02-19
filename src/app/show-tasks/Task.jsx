import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

const Task = ({ task }) => {
  const { user } = useContext(UserContext);
  return (
    <div
      className={`p-2   rounded-md mt-2 ${
        task.status == "completed" ? "bg-green-400" : "bg-red-400"
      }`}
    >
      <div className="  p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">{task.title}</h1>
          <span className="cursor-pointer">
            <RxCross1 />
          </span>
        </div>

        <p className=" font-serif">{task.content}</p>
        <p className="text-right">
          <b>Author:{user?.name}</b>
        </p>
        <p className="text-right">
          <b>Status:{task.status}</b>
        </p>
      </div>
    </div>
  );
};

export default Task;
