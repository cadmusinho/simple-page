import {CSSProperties, FC, memo} from "react";
import {TodoType} from "../../types/TodoType";
import {Card, Image, Text} from "@mantine/core";


interface TodoListItemProps {
    item: TodoType;
}

export const TodoListItem: FC<TodoListItemProps> = memo(({item}) => {

    const style: CSSProperties | undefined = item.done ? {
        border: "1px solid",
        borderColor: "rgba(0,194,0,0.72)",
        boxShadow: "4px 4px 10px rgba(0,194,0,0.5)"  // Zielona poświata
    } : {
        border: "1px solid",
        borderColor: "rgba(194, 0,0,0.72)",
        boxShadow: "4px 4px 10px rgba(194,0,0,0.5)"  // Czerwona poświata
    };

    return (
        <Card
            shadow="sm"
            style={style}
        >
            <Card.Section>
                <Image
                    src="https://placehold.co/400x200"
                    h={200}
                    alt="No way!"
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                {item.title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
                {item.content}
            </Text>
        </Card>
    );
});