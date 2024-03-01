import { item } from "@/components/types"
import EditNonRecur from "@/components/tasks/modal/editNonrecur";
import React from "react";
import { unstable_noStore as noStore } from 'next/cache';

export async function getSelections() {
    try {
      const response = await fetch("http://localhost:3000/api/selection");
      const data = await response.json();
  
      //console.log(data);
  
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  export async function getSelection(id){
    try {

    } catch (error){
        console.error("Error fetching data : ", error)
    }
  }


export async function NonReccurData() {
    noStore()
    const tasks : item[] = await getTasks()
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
       <table className='container table-auto max-w-screen bg-gradient-to-r from-green-300 via-blue-100 to-gray-200 rounded-md p-4'>

       <thead className='text-black '>
       <tr className='*:p-4 justify-between'>
           <th>TASK</th>
           <th>CATEGORY</th>
           <th>TYPE</th>
           <th>DUE</th>
           <th>STATUS</th>
           <th>EDIT</th>
       </tr>
       </thead>
    {" "}

    <tbody className='bg-gray-100 overflow-auto'>
       {tasks?.map((task, index) => (
           <tr key={index} className='*:p-4 justify-between'>
             <td>{task.task}</td>{" "}
             <td>{task.category}</td>{" "}
             <td>{task.type}</td>{" "}
             <td>{new Date(task.duedate).toLocaleDateString()}</td>{" "}
             <td>{task.stage}</td>{" "}
             <td><EditNonRecur taskId={task.id}/></td>
           </tr>
       ))}
       </tbody>{" "}
       </table>
   )
}

  export async function getTasks() {
    try{

      const response = await fetch("http://localhost:3000/api/nonRecur");
      const data = await response.json();
      console.log(data)

      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }