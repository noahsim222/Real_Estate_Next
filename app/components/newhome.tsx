import Image from "next/image"
import React from "react"

const Newhome:React.FC = () => {
  return (
    <div className="p-5  relative">
      <div className="rounded-3xl shadow-[0_0_50px_-10px]">
        <Image
          src="/background.jpg"
          alt="Florida"
          width={1920}
          height={661}
          className="w-full h-auto rounded-3xl opacity-70 min-h-[300px] "
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[70%]">
        <h1 className="text-5xl font-bold pb-12 leading-snug max-[540px]:text-3xl">Discover New Home in Florida</h1>
        <input
          type="text"
          className="w-[70%] px-5 py-3 rounded-lg"
          placeholder="Search Real Estate in Florida"
        />
      </div>
    </div>
  )
}

export default Newhome