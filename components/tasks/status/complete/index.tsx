"use client"
import React, {Suspense, useEffect, useState} from 'react'
import {IoCheckmarkCircle} from "react-icons/io5";
import {Loading} from "@/components/loading";
import { currentUser } from "@clerk/nextjs";
import {item} from "@/components/types";
import {FormatDate} from "@/components/dateCalendar/dateFormat";
import EditRecur from "@/components/tasks/modal/editRecur";
import EditNonRecur from "@/components/tasks/modal/editNonrecur";


const CompleteTask= () => {
    const [isCompleteOpen, setCompleteOpen] = useState(false);
    const toggleComplete = () => {
        setCompleteOpen(!isCompleteOpen);

    };

    const [tasks, setTasks] = useState<item[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const status = "Completed";

                // Fetch data from API endpoint
                const response = await fetch(`/api/allTask/${status}`);
                const data = await response.json();
                // console.log("data"+data);

                setTasks(data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchTasks();
    }, []);


    return (
      <>
          <div onClick={toggleComplete}
               className='shadow hover:shadow-lg bg-gradient-to-r from-green-100  to-gray-200 rounded-lg justify-between p-3 '>
              <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                  <div className='flex justify-between items-center'>
                      <IoCheckmarkCircle className='m-1 h-5 w-5'/>
                      <div className='m-1'>COMPLETED</div>
                  </div>
              </div>
              <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                  {tasks.length}
              </div>
          </div>
          <div className={` ${isCompleteOpen ? 'justify-between overflow-auto' : 'ml-5 hidden'}`}>
              <div className='m-3 h-44 text-gray-600 text-sm'>
                  {/* <div>
            <div className='justify-center flex m-2 bg-gradient-to-r text-center from-yellow-100  to-gray-200 w-44 rounded-md'>UPCOMING</div>
        </div> */}
                  <div
                      className='text-left text-gray-600 p-3 gap-2  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-rows-2'>
                      {tasks?.map(task => (
                          <div key={task.id} className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
                              <div className='p-2'>

                                  <div className='font-bold text-md'>{task.task}</div>
                                  <div>{FormatDate(task.endDate)}</div>
                                  <div className='mt-2 hover:underline text-xs'>{task.tasktype === 'Recurring' ? <EditRecur taskId={task.id} /> : <EditNonRecur taskId={task.id} />}</div>

                              </div>
                          </div>))}
                  </div>


              </div>
          </div>
      </>
    )
}

export default CompleteTask