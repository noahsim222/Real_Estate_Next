'use client'

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"

const Homeownership: React.FC = () => {
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
      <h1 className="text-4xl font-bold pt-10 px-5 text-center max-[540px]:text-3xl">Discover Homeownership on</h1>
      <p className="text-[25px] text-[#a3a4a8] mt-5 px-5 text-center max-[540px]:text-xl">Renting is great, but maybe you&apos;re thinking about buying a home instead. We want you to find the right place. That&apos;s why our sister site, Homes.com, is designed to help you find your dream home, even if you&apos;re a first time buyer.</p>
      <div className="mt-20 lg:flex justify-center items-center p-5">
        <div className="basis-1/2 p-16 grid gap-4 bg-black bg-opacity-5 rounded-t-lg lg:rounded-l-lg " ref={elementRef}>
          <p className="text-[30px] text-black max-[540px]:text-[25px] max-[540px]:text-center">Explore Your Options</p>
          <p className="text-[20px] text-[#404042] max-[540px]:text-[20px] max-[540px]:text-center">Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision.</p>
          <button type="button" className="text-[35px] text-[#67709d] hover:text-[#92949c] text-left max-[540px]:text-[25px] max-[540px]:text-center">
            Start Your Search
          </button>
        </div>
        <div className="basis-1/2 h-full">
          <Image
            src="/explorerOption.webp"
            alt="Most Rent"
            width={746}
            height={340}
            className="w-full rounded-b-lg lg:rounded-r-lg  max-h-[468px]"
            style={{height: `${elementHeight}px`}}
          />
        </div>
      </div>
    </div>
  )
}

export default Homeownership