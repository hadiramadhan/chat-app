import { Button } from "@/components/ui/button"
import Image from "next/image"
import AuthButtons from "./AuthButtons"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const page = async () => {
  const {isAuthenticated} = getKindeServerSession()
  if(await isAuthenticated()) return redirect("/")
  return (
    <div className="flex h-screen w-full">
        <div className="flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#c52847] relative justify-center items-center">
            <img src="/redis-logo.svg" alt="redis" className="absolute -left-1/4 opacity-25 -bottom-52 lg:scale-100 xl:scale-100 scale-[2] pointer-events-none select-none -z-1" />
            <div className="flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold">
             <Image
             src={"/124.png"}
             alt="Logo"
             width={500}
             height={50}
             className="mt-50 w-[350px] z-0 pointer-events-none select-none "
             />
             <p className="text-2xl md:text-3xl z-10 mb-2 ">
                Welcome<span className="bg-green-500 px-2 font-bold text-white">To</span> Chat App
             </p>
             <p className="text-2xl md:text-3xl mb-32 mt-0">
                You <span className="bg-yellow-500/90 font-bold px-2 text-white">Go To</span>Build
             </p>
             <AuthButtons />
            </div>
        </div>
        <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex bg-noise">
            <Image
            src={"/222.jpg"}
            alt="hero"
            fill
            className="object-cover dark:opacity-60 opacity-90 pointer-events-none select-none h-full"
            />
        </div>        
    </div>
  )
}

export default page