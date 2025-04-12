import {TodoFormValues} from "../../../types/TodoFormValues.ts";
import ky from "ky";
import {TodoType} from "../../../types/TodoType.ts";
import {API_URL} from "../../../config.ts";

export const createTodo = async (data: TodoFormValues)=>{
    return ky.post(`${API_URL}/todo`, {json: data, credentials: "include"}).json<TodoType>();
}