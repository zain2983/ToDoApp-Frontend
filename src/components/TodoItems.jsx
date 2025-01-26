import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, selected, onSelect, onDelete }) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            {/* Task selection */}
            <div
                className='flex flex-1 items-center cursor-pointer'
                onClick={onSelect} // Toggle selection when clicked
            >
                <img
                    className='w-5 h-5'
                    src={selected ? tick : not_tick} // Show tick or not-tick
                    alt={selected ? "tick_icon" : "not_tick_icon"}
                />
                <p className={`text-slate-700 ml-4 text-[17px] ${selected ? 'line-through text-green-600' : ''}`}>
                    {text}
                </p>
            </div>

            {/* Task deletion */}
            <img
                className='w-3.5 h-3.5 cursor-pointer'
                src={delete_icon}
                alt="delete_icon"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering onSelect
                    onDelete(); // Call delete function
                }}
            />
        </div>
    );
};

export default TodoItems;
