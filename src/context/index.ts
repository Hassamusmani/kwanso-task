import { createContext } from 'react';

import {
  Task,
} from '../types';

export type context = {
  allTasks: Task[];
  toastMessage: string;
  addTask: (newTask: Task) => void;
  deleteTasks: (ids: number[]) => void;
  setToast: (msg: string) => void;
  handleTaskStatus: (id: number) => void;
};

export const initContext: context = {
  allTasks: [],
  toastMessage: '',
  addTask: () => null,
  deleteTasks: () => null,
  setToast: () => null,
  handleTaskStatus: () => null
};

const AppContext = createContext(initContext);

export default AppContext;
