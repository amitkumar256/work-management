"use client";
import Image from "next/image";
import login from "../../assets/login.svg";
import React, { useState } from "react";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "65b9af95f1f817ffdc8deff6",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("your task is added", {
        position: "top-center",
      });
      setTask({ title: "", content: "", status: "none" });
    } catch (error) {
      console.log(error);
      toast.error("your task is not added", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center p-5">
        <div className="my-8 lg:w-2/5">
          <Image src={login} alt="imge" />
        </div>
        <h1 className="text-2xl text-center">Add your task here!!</h1>
        <form className="lg:w-2/5" action="" onSubmit={handleAddTask}>
          <div className="mt-4 ">
            <label htmlFor="task_title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id='"task_title'
              className="w-full p-2 rounded-3xl bg-gray-400 focus:ring-gray-200 border border-gray-700  mt-2"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="task_content" className="block text-sm font-medium">
              content
            </label>
            <textarea
              id='"task_content'
              className="w-full p-2 rounded-3xl bg-gray-400 focus:ring-gray-200 border border-gray-700  mt-2"
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="task_status" className="block text-sm font-medium ">
              status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-3xl bg-gray-400 focus:ring-gray-400 border"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" selected disabled>
                ---select status---
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div className="mt-4 flex space-x-2 justify-center">
            <button className="bg-blue-700 py-3 px-3 rounded-lg hover:bg-blue-800">
              add Todo
            </button>
            <button className="bg-red-700 py-3 px-3 rounded-lg hover:bg-blue-800">
              clear
            </button>
          </div>

          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
