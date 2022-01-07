export type Task = {
  id: number;
  description: string;
  isComplete: boolean;
  priority: string;
  taskBoardId: number;
};

export type Tasks = Array<Task>;
