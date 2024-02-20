"use client";

import UserContext from "@/context/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";
const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);
  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);
  async function deleteTaskParent(taskId) {
    try {
      const result = await deleteTask(taskId);
      console.log(result);
      const newTasks = tasks.filter((item) => item._id != taskId);
      setTasks(newTasks);
      toast.success("your task is deleted");
    } catch (error) {
      console.log(error);
      toast.error("error in deleting task !!");
    }
  }
  return (
    <div className="lg:max-w-[1280px] lg:mx-auto mx-2 ">
      <div>
        <h1 className="text-3xl text-center">your tasks({tasks.length})</h1>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default ShowTasks;

{
  /* <div className=" ">
<h1 className="text-3xl text-center">your tasks({tasks.length})</h1>
{tasks.map((task) => (
  <Task
    task={task}
    key={task._id}
    deleteTaskParent={deleteTaskParent}
  />
))}
</div> */
}
