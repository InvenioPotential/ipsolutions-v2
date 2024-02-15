import Link from "next/link";

export default function Home() {
  return (//bg-[url('/images/bg.png')]
    <div className="flex mt-20 text-center justify-center">
        <form className=" bg-opacity-50 rounded-sm p-10 w-50 h-622">
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
          <div className="pt-10 flex justify-center items-center">
            <Link href="/sign-in">
            <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-7 rounded">
              SIGN-IN
            </button>
            </Link>
        </div>
        <div className="pt-10 flex justify-center items-center">
            <Link href="/sign-up">
            <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-7 rounded">
              SIGN-UP
            </button>
            </Link>
        </div>
        </form>  
    </div>
  )
}
