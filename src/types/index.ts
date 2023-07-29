import { ReactNode } from "react";

export interface ChildernProp {
    children: ReactNode;
}

export interface Task {
    id: number,
    label: string,
    description: string,
    isCompleted: boolean;
};