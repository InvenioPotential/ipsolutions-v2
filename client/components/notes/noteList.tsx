import React, { useState, useEffect } from 'react'
//import DatePickers from '../dateCalendar/datepickers';
//import Priority from '../listing/priority';
import { IoMdAddCircle } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { todo } from 'node:test';
import axios from 'axios';

interface item {
    id: number;
    title: string;
    notes: string;
    duedate: string;
    priority: string;

}

export const NoteList: React.FC = () => {
    const [setTitle, setInput1] = useState<string>("");
    const [setNotes, setInput2] = useState<string>("");
    const [setDuedate, setInput3] = useState<string>("");
    const [setPriority, setInput4] = useState<string>("");

    const [todos, setTodos] = useState<item[]>([
    ]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch('/api/todos'); // Fetch data from the API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            const data = await response.json(); // Parse response body as JSON
            setTodos(data); // Update todos state with fetched data
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const data = { ids: id }
            const response = await fetch('/api/todos',  // Change it to something similar
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            fetchTodos();


        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };


    const handleClick = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const body = { title: setTitle, notes: setNotes, duedate: setDuedate, priority: setPriority };
            await fetch('/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            fetchTodos();

        } catch (error) {
            console.error(error);
        }
    };

    const [showModal, setShowModal] = React.useState(false);
    const [showDel, setShowDel] = React.useState(false);

    return (
        <div className='p-2 m-1'>
            <div className='p-1 text-sm border-b-2 items-center justify-between flex'>
                <p className='font-bold'>TO-DO LISTS</p>
                <>
                    <button type="button"
                        onClick={() => setShowModal(true)}
                        className='p-2 rounded-md'>
                        <IoMdAddCircle className='w-5 h-5' />
                    </button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <div>
                                                <p className="text-2xl text-black font-bold">
                                                    ADD TO-DO
                                                </p>
                                                <p className='text-sm flex'>TO-DO LIST</p>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6  flex-auto">
                                            <form className='font-semibold'>
                                                <div className='grid w-74 gap-5 grid-cols-2'>
                                                    <div className='col-span-2 row-span-1 w-full items-center'>
                                                        <p>TITLE:</p>
                                                        <div className='mx-auto flex'>
                                                            <input

                                                                required
                                                                type='title'
                                                                onChange={(e) => setInput1(e.currentTarget.value)}
                                                                className='p-2 m-1 mx-auto flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-300 placeholder-opacity-100'
                                                                placeholder='Insert title...'>
                                                            </input>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-2 row-span-2 w-full items-center'>
                                                        <p>NOTES:</p>
                                                        <div className='mx-auto flex'>
                                                            <input
                                                                required
                                                                onChange={(e) => setInput2(e.currentTarget.value)}
                                                                className='p-2 m-1 mx-auto flex-auto row-span-2  col-span-2 rounded-md bg-gray-100 placeholder-gray-300 placeholder-opacity-100'
                                                                placeholder='Add notes...'></input>
                                                        </div>
                                                    </div>
                                                    <div className='*:m-2 row-span-1'>
                                                        <p>DUE:</p>
                                                        <input
                                                            type="date"
                                                            onChange={(e) => setInput3(e.currentTarget.value)}
                                                            className='p-2 m-1 mx-auto flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-300 placeholder-opacity-100'
                                                        />

                                                    </div>
                                                    <div className='*:m-2 row-span-1'>
                                                        <p>PRIORITY:</p>
                                                        <div className='mx-auto flex'>
                                                            <select
                                                                onChange={(e) => setInput4(e.currentTarget.value)}
                                                                className='p-2 m-2 mx-auto flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-300 placeholder-opacity-100'
                                                            >
                                                                <option value='High'>High</option>
                                                                <option value='Medium'>Medium</option>
                                                                <option value='Low'>Low</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                    <div onClick={() => setShowModal(false)}>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={handleClick}
                                                        >
                                                            ADD
                                                        </button>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                        {/*footer*/}

                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </>

            </div>
            <div className='p-1 m-1 h-56 overflow-auto'>
                <ul className='mt-1 text-sm'>
                    {todos.map((todo) => (
                        <li
                            className='m-1 p-3 border rounded-md'
                            key={todo.id}
                            onClick={() => handleToggle(todo.id)}
                        //style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                        >
                            <div className='font-bold flex justify-between'>
                                {todo.title}
                                <>
                                    <button type="button"
                                        onClick={() => setShowDel(true)}
                                        className='m-1 p-1 hover:bg-red-200 rounded-full'>
                                        <MdDelete /></button>
                                    {showDel ? (
                                        <>
                                            <div
                                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                            >
                                                <div className="relative w-auto my-6 mx-auto max-w-sm">
                                                    {/*content*/}
                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                                        {/*body*/}
                                                        <div className="relative p-6 flex-auto">
                                                            <p className="my-2 font-bold text-blueGray-500 text-lg leading-relaxed">
                                                                DELETE TASK?
                                                            </p>
                                                            <div className="my-2 text-sm text-blueGray-500 leading-relaxed">
                                                                YOU WON'T BE ABLE TO UNDO THIS ACTION.
                                                            </div>
                                                        </div>
                                                        {/*footer*/}
                                                        <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                            <button
                                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={() => setShowDel(false)}
                                                            >
                                                                CANCEL
                                                            </button>
                                                            <button
                                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={() => handleDelete(todo.id)}
                                                            >
                                                                DELETE
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                        </>
                                    ) : null}
                                </>
                            </div>
                            <div className='text-sm font-semibold'>Notes - {todo.notes}</div>
                            <div className='text-sm font-semibold'>Due Date - {todo.duedate}</div>
                            <div className='text-sm font-semibold'>Priority - {todo.priority}</div>
                        </li>
                    ))}

                </ul>

            </div>
        </div >
    )
}

export default NoteList
