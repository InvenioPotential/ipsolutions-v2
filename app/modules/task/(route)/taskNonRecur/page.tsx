
import React, {Suspense} from 'react'
import AddNonRecur from "@/components/tasks/modal/addNonRecur";
import EditNonRecur from "@/components/tasks/modal/editNonrecur";
import MiniCalendar from "@/components/dateCalendar/miniCalendar";
import AssignTask from "@/components/tasks/assignTask";
import  {TableLoading }  from "@/components/loading";
import  NonRecurData  from "@/components/tasks/listing/nonRecurLists";
import Search from "@/components/search";

const TaskNonRecur = async ({ searchParams, }: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="lg:pl-10 lg:pr-10 md:pl-5 sm:pl-5 md:pr-5 sm:pr-5 lg:m-5 md:m-10 sm:m-10">
      <div className="border-b-1 mb-5 flex justify-between">
        <div className="">
          <div className="text-2xl text-black font-bold">NON-RECURRING</div>
          <div className="text-xs text-gray-500 font-semibold">
            TASK MANAGEMENT
          </div>
        </div>
      </div>
      <div className=" min-h-screen rounded-md text-gray-500">
        <div className="mx-auto overflow-auto lg:h-auto rounded-md p-2 sm:m-1 md:m-1 m-5">
          <div className="grid grid-rows-1 lg:grid-cols-4 gap-4 md:grid-cols-1 sm:grid-cols-1">
            <div className="overflow-auto p-2 bg-white rounded-md grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2 row-span-2">
              <div className="overflow-auto w-auto rounded-md text-md font-semibold p-3 m-2 text-center justify-between flex">
                <div className="">
                  <h6 className="text-gray-900">STAGE:</h6>
                  <div>
                    <select className="rounded-md">
                      <option value="all">All</option>
                      <option>ON-GOING</option>
                      <option>COMPLETE</option>

                    </select>
                  </div>
                </div>
                <div className="">
                  {/*<h6 className="text-gray-900 ">STATUS: </h6>*/}
                  {/*<div>*/}
                  {/*  <select className="rounded-md">*/}
                  {/*    <option>All</option>*/}
                  {/*    <option>On-going</option>*/}
                  {/*    <option>Completed</option>*/}
                  {/*    <option>Late</option>*/}
                  {/*  </select>*/}
                  {/*</div>*/}
                </div>
                <AddNonRecur />
              </div>
            <Search />
              <div className="overflow-auto mx-auto rounded-md text-md font-semibold p-3 m-2 text-center grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2">
                <Suspense key={query + currentPage}  fallback={ <TableLoading /> }>
                  <NonRecurData query={query}  currentPage={currentPage} />
                </Suspense>
              </div>
            </div>
            <div className="p-2 grid rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white">
              <AssignTask />
            </div>
            <div className="p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white">
              <MiniCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskNonRecur;
