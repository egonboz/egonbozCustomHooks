import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


export const useTodos = (initialState = []) => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'addTodoAction',
            payload: todo
        };
        dispatch(action);
    }

    const handleDeleteTodo = ( todoId ) => {
        const action = {
            type: 'deleteTodoAction',
            payload: todoId
        };
        dispatch(action);
    }

    const handleToogleDoneTodo = ( todoId ) => {
        const action = {
            type: 'toggleDoneTodoAction',
            payload: todoId
        };
        dispatch(action);
    }


    return {
        todos,
        todosCount: todos.length,
        todosPending: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToogleDoneTodo,
    }
}



