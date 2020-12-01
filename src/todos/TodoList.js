import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getTodos, getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import './TodoList.css';

const TodoList = ({ completedTodos = [], incompleteTodos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>

    const content = (
        <div className='list-wrapper'>
            <NewTodoForm /> 
            <h3>Incomplete: </h3>
            {incompleteTodos.map(todo => <TodoListItem todo={todo} onCompletedPressed={onCompletedPressed} onRemovePressed={onRemovePressed}/>)}
            <h3>Completed: </h3>
            {completedTodos.map(todo => <TodoListItem todo={todo} onCompletedPressed={onCompletedPressed} onRemovePressed={onRemovePressed}/>)}
        </div>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(completeTodoRequest(id)),
})
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);