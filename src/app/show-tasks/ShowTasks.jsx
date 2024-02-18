"use client";
import UserContext from "@/context/userContext";
import { getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);
  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks]);
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
  return (
    <div>
      <div className="container grid">
        <div>
          <h1 className="text-3xl text-center">your tasks({tasks.length})</h1>
        </div>
      </div>
    </div>
  );
};

export default ShowTasks;
