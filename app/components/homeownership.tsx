import Image from "next/image"

const Homeownership = () => {
  return (
    <div className="py-20 border-t-2 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold pt-10">The Most Rental Listings</h1>
      <p className="text-[25px] text-[#a3a4a8] mt-5">Choose from over 1 million apartments, houses, condos, and townhomes for rent.</p>
      <div className="mt-20 flex justify-center items-center p-5">
        <div className="basis-1/2 p-16 grid gap-4 bg-black bg-opacity-5">
          <p className="text-[30px] text-black">Renting Made Simple</p>
          <p className="text-[20px] text-[#404042]">Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.</p>
          <button type="button" className="text-[35px] text-[#67709d] hover:text-[#92949c] text-left">
            Find Out More
          </button>
        </div>
        <div className="basis-1/2 h-full">
          <Image
            src="/mostrent.webp"
            alt="Most Rent"
            width={746}
            height={340}
            className="w-full "
          />
        </div>
      </div>
    </div>
  )
}

export default Homeownership