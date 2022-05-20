import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        text={todo.text} 
                        completed={todo.completed} 
                        key={todo.id} 
                        todos={todos} 
                        setTodos={setTodos} 
                        todo={todo} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;