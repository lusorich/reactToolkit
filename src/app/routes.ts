// eslint-disable-next-line no-shadow
export enum Pathname {
  'index' = '/',
  'taskboards' = 'taskboards',
  'tasks' = 'tasks',
}

type RoutePathname = {
  path: Pathname.index | Pathname.taskboards | Pathname.tasks;
  mainPathname: boolean;
  description: string;
};
type RoutePathnames = Array<RoutePathname>;

export const routePathnames: RoutePathnames = [
  {
    path: Pathname.index,
    mainPathname: true,
    description: 'Index Page',
  },
  {
    path: Pathname.taskboards,
    mainPathname: false,
    description: 'Go to taskBoards page',
  },
  {
    path: Pathname.tasks,
    mainPathname: false,
    description: 'Go to tasks page',
  },
];
