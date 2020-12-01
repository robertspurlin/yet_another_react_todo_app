import { createTodo, 
    loadTodosInProgress, 
    loadTodosSuccess, 
    loadTodosFailure, 
    removeTodo,
    completeTodo } from './actions';

export const loadTodos = () => async (dispatch, getState) => {
    try { 
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
    }
}

export const addTodoRequest = text => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        console.log(e);
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'DELETE'
        });
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (e) {
        console.log(e);
    }
}

export const completeTodoRequest = id => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({ id });
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'POST',
        });
        const todo = await response.json();
        dispatch(completeTodo(todo));
    } catch (e) {
        console.log(e);
    }
}