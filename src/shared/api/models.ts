export type TaskBoard = {
  id: number;
  description: string;
};

export type Task = {
  id: number;
  description: string;
  isComplete: boolean;
  priority: string;
  taskBoardId: number;
};

export type TaskBoards = Array<TaskBoard>;
export type Tasks = Array<Task>;
