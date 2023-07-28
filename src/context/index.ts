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
};

export const initContext: context = {
  allTasks: [],
  toastMessage: '',
  addTask: () => null,
  deleteTasks: () => null,
  setToast: () => null
};

const AppContext = createContext(initContext);

export default AppContext;
