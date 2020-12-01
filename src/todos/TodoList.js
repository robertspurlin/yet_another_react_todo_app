import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './actions';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <div className='list-wrapper'>
        <NewTodoForm /> 
        {todos.map(todo => <TodoListItem todo={todo} onCompletedPressed={onCompletedPressed} onRemovePressed={onRemovePressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(completeTodo(text)),
})
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);