import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { FaUser , FaLock} from "react-icons/fa";

const LoginForm = () => {
  return (
<form className=" bg-white bg-opacity-50 rounded-sm p-10 w-50 h-622">
        <div className="block  p-5 h-auto text-gray-600 text-sm items-center justify-center">
          <div className="flex justify-center items-center font-bold">
            WELCOME TO
          </div>
          <img
            src={"/images/ipsolutionslogo.png"}
            alt="IP Solutions Logo"
            width={266}  // Set the width as a placeholder
            height={78}  // Set the height as a placeholder
            className="animate-pulse"

          />
        </div>
        <div className="pt-5">
          {/* <label className="flex text-sm font-medium text-gray-600"></label> */}
          <div className="pl-3 mt-3 mb-5 p-1 flex rounded-sm">
            <FaUser size={30} style={{color:'gray', padding:'3px'}} />
            <input
              type="text"
              placeholder="Username"
              className="ml-2 text-sm selection:mt-1 p-2 rounded-md w-full"
            />
          </div>
          <div className="pl-3 mt-3 mb-9 p-1 flex rounded-sm">
            {/* <label className="flex mt-4 text-sm font-medium text-gray-600"></label> */}
            <FaLock size={30} style={{color:'gray', padding:'3px'}} />
            <input
              type="password"
              placeholder="Password"
              className="ml-2 text-sm selection:mt-1 p-2 rounded-md w-full"
            />
          </div>
        </div>
        <div className="pt-10 flex justify-center items-center">
          <Link href="/dashboard">
          <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-7 rounded">
            LOGIN
          </button>
          </Link>
        </div>
        <div className="hover:underline text-xs pt-2 text-gray-500 flex justify-center items-center text-center">
          FORGOT USERNAME/PASSWORD? CLICK HERE
        </div>
      </form>
  )
}

export default LoginForm
