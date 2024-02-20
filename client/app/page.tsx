import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex mt-20 text-center  items-center justify-center">
       {/* <div className="grid-cols-1 w-auto mx-auto">
         <Image
           src={"/images/bg.png"}
           alt="IP Solutions Logo"
           width={266}  // Set the width as a placeholder
           height={78}  // Set the height as a placeholder
           className="animate-pulse" />
       </div> */}
        <div className="grid-cols-1 bg-opacity-50 rounded-sm p-10 w-50 h-622">
          <div className="block  p-5 h-auto text-gray-600 text-md items-center justify-center">
            <div className="flex justify-center items-center font-bold">
              WELCOME TO
            </div>
            <Image
              src={"/images/ipsolutionslogo.png"}
              alt="IP Solutions Logo"
              width={266}  // Set the width as a placeholder
              height={78}  // Set the height as a placeholder
              className="animate-pulse"
            />
          </div>
          <div className="pt-10 *:m-5 justify-center items-center">
              <Link href="/sign-in">
              <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-7 rounded-lg">
                SIGN-IN
              </button>
              </Link> 
              <Link href="/sign-up">
              <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-7 rounded-lg">
                SIGN-UP
              </button>
              </Link>        
        </div>
        <div className="pt-10  flex justify-center items-center">
            <p className="font-semibold text-sm text-gray-500">DON&apos;T HAVE AN ACCOUNT? CONTACT US.</p>
        </div>
        </div>  
     </div>
  )
}
