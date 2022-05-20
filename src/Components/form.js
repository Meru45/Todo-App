import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {

    const submitTodoHandler = (e) => {
        e.preventDefault();

        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.floor(Math.random()*1000)
        }]);

        setInputText('');
    }

    return (
        <div>
            <form >
                <input type="text" className="todo-input" onChange={e => setInputText(e.target.value)} value={inputText} />
                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                    <i className="fas fa-plus-square" />
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={(e) => setStatus(e.target.value)}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;