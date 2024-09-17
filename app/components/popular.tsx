import Image from "next/image"
import React from "react"

interface PopularItem {
  image: string, 
  title: string, 
  des: string, 
  bio: string, 
}

const populars: PopularItem[] = [
  {
    image: '/01_NewListings.webp',
    title: '01_NewListings',
    des: '2435 S Sepulveda Blvd, Los Angeles, CA 90064',
    bio: 'Studio - 3 Beds | $3175 - $10,375'
  },
  {
    image: '/02_LuxuryHomes.webp',
    title: '02_LuxuryHomes',
    des: '2435 S Sepulveda Blvd, Los Angeles, CA 90064',
    bio: 'Studio - 3 Beds | $3175 - $10,375'
  },
  {
    image: '/03_OpenHouses.webp',
    title: '03_OpenHouses',
    des: '2435 S Sepulveda Blvd, Los Angeles, CA 90064',
    bio: 'Studio - 3 Beds | $3175 - $10,375'
  },
  {
    image: '/04_PriceReductions.webp',
    title: '04_PriceReductions',
    des: '2435 S Sepulveda Blvd, Los Angeles, CA 90064',
    bio: 'Studio - 3 Beds | $3175 - $10,375'
  },
  {
    image: '/05_VirtualTours.webp',
    title: '05_VirtualTours',
    des: '2435 S Sepulveda Blvd, Los Angeles, CA 90064',
    bio: 'Studio - 3 Beds | $3175 - $10,375'
  },
  {
    image: '/childrens_hospital.webp',
    title: 'childrens_hospital',
    des: '2435 S Sepulveda Blvd, Los Angeles, CA 90064',
    bio: 'Studio - 3 Beds | $3175 - $10,375'
  },
]

const Popular:React.FC = () => {
  return (
    <div className="pt-10 pb-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold py-10 px-5 max-[540px]:text-3xl text-center">Recent Popular Real Estate</h1>
      <div className="p-5 grid lg:grid-cols-3 sm:grid-cols-2 gap-10 ">
        {populars.map((p: PopularItem) => (
          <div key={p.image} className="grid gap-4 border-2 rounded-2xl text-center text-[#636363] hover:text-black hover:shadow-2xl duration-200">
            <Image
              src={p.image}
              loading="lazy"
              alt={p.title}
              width={380}
              height={360}
              className="w-full h-auto rounded-t-2xl"
            />
            <p className="text-[25px]">{p.title}</p>
            <p className="px-10">{p.des}</p>
            <p className="pb-10">{p.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular