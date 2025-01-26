import React, { useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from '../components/TodoItems';

const Todo = () => {
    const [todos, setTodos] = useState([]); // State to hold the list of to-do items
    const [inputValue, setInputValue] = useState(''); // State to hold the input value

    // Function to add a new to-do item
    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue, selected: false }]);
            setInputValue(''); // Clear the input
        }
    };

    // Function to delete a to-do item
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Function to toggle the selected state of a to-do item
    const toggleSelect = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, selected: !todo.selected } : todo
        ));
    };

    return (
        <div className='bg-stone-900 grid py-4 min-h-screen'>
            <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

                {/* title */}
                <div className='flex items-center mt-7 gap-2'>
                    <img className='w-8 h-8' src={todo_icon} alt="todo_icon" />
                    <h1 className='text-3xl font-bold text-stone-900'>To-Do List</h1>
                </div>

                {/* input box */}
                <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                    <input
                        type="text"
                        placeholder='Add a new task'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
                    />
                    <button
                        onClick={addTodo}
                        className='border-none bg-blue-500 rounded-full w-32 h-14 text-lg text-white font-medium'
                    >
                        Add
                    </button>
                </div>

                {/* todo list */}
                <div>
                    {todos.map((todo) => (
                        <TodoItems
                            key={todo.id}
                            text={todo.text}
                            selected={todo.selected}
                            onDelete={() => deleteTodo(todo.id)}
                            onSelect={() => toggleSelect(todo.id)}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Todo;
