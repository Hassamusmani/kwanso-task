import React, { useState } from 'react';
import AppContext, { context } from '../context';
import { ChildernProp, Task } from '../types';

const AppContextProvider: React.FC<ChildernProp> = ({ children }) => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [toastMessage, setToastMessage] = useState<string>('');

  const setToast = (msg: string) => {
    setToastMessage(msg);
  };

  const addTask = (newTask: Task) => {
    setAllTasks([newTask, ...allTasks]);
    setToast("Task added..:)");
  };

  const deleteTasks = (ids: number[]) => {
    const filteredTasks = allTasks.filter(({ id }) => !ids.includes(id));
    setAllTasks(filteredTasks);
    setToast("Deleted..:)");
  };

  const handleTaskStatus = (id: number) => {
    const updatedTasks = allTasks.map((task) => {
      if (task.id === id) {
        setToast("Task status changed...");
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    });
    setAllTasks(updatedTasks);
  };

  const contextValue: context = {
    allTasks,
    addTask,
    deleteTasks,
    toastMessage,
    setToast,
    handleTaskStatus
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;