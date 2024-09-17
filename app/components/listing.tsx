import Image from "next/image"

const Listing = () => {
  return (
    <div className="py-20 border-t-2 flex flex-col justify-center items-center p-5">
      <h1 className="text-4xl font-bold pt-10">The Most Rental Listings</h1>
      <p className="text-[25px] text-[#a3a4a8] mt-5 px-20 text-center">Choose from over 1 million apartments, houses, condos, and townhomes for rent.</p>
      <div className="mt-20 flex justify-center items-center bg-black bg-opacity-5 w-full">
        <div className="basis-1/2 p-16 grid gap-4">
          <p className="text-[30px] text-black">Renting Made Simple</p>
          <p className="text-[20px] text-[#404042]">Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.</p>
          <button type="button" className="text-[35px] text-[#67709d] hover:text-[#92949c] text-left">
            Find Out More
          </button>
        </div>
        <div className="basis-1/2 bg-[url('/mostrent.webp')] bg-auto" >
          
        </div>
      </div>
    </div>
  )
}

export default Listing

