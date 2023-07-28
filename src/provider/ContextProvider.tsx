import React, { useState } from 'react';
import AppContext, { context } from '../context';
import { ChildernProp, Task } from '../types';

const AppContextProvider: React.FC<ChildernProp> = ({ children }) => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [toastMessage, setToastMessage] = useState<string>('');

  const addTask = (newTask: Task) => {
    setAllTasks([newTask, ...allTasks]);
  };

  const deleteTasks = (ids: number[]) => {
    const filteredTasks = allTasks.filter(({ id }) => !ids.includes(id));
    setAllTasks(filteredTasks);
  };

  const setToast = (msg: string) => {
    setToastMessage(msg);
  };

  const contextValue: context = {
    allTasks,
    addTask,
    deleteTasks,
    toastMessage,
    setToast,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;