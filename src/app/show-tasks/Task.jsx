import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";

const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContext);

  function deleteTask(taskId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Taks has been deleted.",
          icon: "success",
        });
        deleteTaskParent(taskId);
      }
    });
  }

  return (
    <div
      className={`p-5  rounded-xl m-5 ${
        task.status == "completed" ? "bg-green-400" : "bg-red-400"
      }`}
    >
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">{task.title}</h1>
          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="cursor-pointer"
          >
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
