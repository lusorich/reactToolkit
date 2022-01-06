import type { AxiosPromise } from "axios";
import { api } from "../base";
import type { TaskBoards } from "../models";

const BASE_URL = "/taskboards"

const getTaskBoards = (): AxiosPromise<TaskBoards> => {
    return api.get(BASE_URL);
};

export const taskBoardsAPI = {
    getTaskBoards
}