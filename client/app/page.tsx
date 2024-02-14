import LoginForm from "@/components/forms/loginForm";

export default function Home() {
  return (//bg-[url('/images/bg.png')]
    <main className="bg-green-500 bg-gradient-to-r from-gray-300 via-green-500 to-green-700 flex min-h-screen min-w-screen flex-col items-center justify-between p-24">
      <LoginForm/>
    </main>
  )
}
