'use client'

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

const Listing:React.FC = () => {
  const [elementHeight, setElementHeight] = useState<number | undefined>(undefined);
  const elementRef = useRef<HTMLDivElement>(null)

  const updateHeight = () => {
    if (elementRef.current) {
      setElementHeight(elementRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight)
    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return (
    <div className="py-20 border-t-2 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold pt-10 px-5 text-center max-[540px]:text-3xl">The Most Rental Listings</h1>
      <p className="text-[25px] text-[#a3a4a8] mt-5 px-5 text-center max-[540px]:text-xl">Choose from over 1 million apartments, houses, condos, and townhomes for rent.</p>
      <div className="mt-20 lg:flex justify-center items-center p-5">
        <div className="basis-1/2 p-16 grid gap-4 bg-black bg-opacity-5 lg:rounded-l-lg rounded-t-lg " ref={elementRef}>
          <p className="text-[30px] text-black max-[540px]:text-[25px] max-[540px]:text-center">Renting Made Simple</p>
          <p className="text-[20px] text-[#404042] max-[540px]:text-[20px] max-[540px]:text-center">Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.</p>
          <button type="button" className="text-[35px] text-[#67709d] hover:text-[#92949c] text-left max-[540px]:text-[25px] max-[540px]:text-center">
            Find Out More
          </button>
        </div>
        <div className="basis-1/2 h-full lg:rounded-r-lg rounded-b-lg">
          <Image
            src="/mostrent.webp"
            alt="Most Rent"
            width={746}
            height={340}
            className="w-full lg:rounded-r-lg rounded-b-lg max-h-[350px]"
            style={{height: `${elementHeight}px`}}
          />
        </div>
      </div>
    </div>
  )
}

export default Listing

