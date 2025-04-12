import {TodoType} from "../../types/TodoType.ts";
import {SimpleGrid} from "@mantine/core";
import {TodoListItem} from "./TodoListItem.tsx";
import {useEffect, useState} from "react";
import {listTodo} from "./api/todo.ts";



export const TodoList = () => {
    const [data, setData] = useState<TodoType[]>([]);

    useEffect(() => {
        listTodo().then((response) => setData(response));
    },[])

    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}