import type { AxiosPromise } from "axios";
import { TaskBoards } from 'entities/TaskBoard/models';
import { api } from "../base";

const BASE_URL = "/taskboards"

const getTaskBoards = (): AxiosPromise<TaskBoards> => {
    return api.get(BASE_URL);
};

export const taskBoardsAPI = {
    getTaskBoards
}