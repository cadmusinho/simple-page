import ky from "ky";
import {TodoType} from "../../../types/TodoType.ts";
import {API_URL} from "../../../config.ts";

export const listTodo = async ()=>{
    return ky.get(`${API_URL}/todo`, {credentials: "include"}).json<TodoType[]>();
}