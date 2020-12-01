import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text, 
                isCompleted: false
            };
            return state.concat(newTodo);
        }

        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }

        case COMPLETE_TODO: {
            const { text } = payload;
            const newTodo = {
                text, 
                isCompleted: true
            };
            const index = state.findIndex(todo => todo.text === text);
            const stateCopy = [...state];
            stateCopy[index] = newTodo;
            return stateCopy;
        }

        default: 
            return state;
    }
}