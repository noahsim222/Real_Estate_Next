import Image from "next/image"

const Map = () => {
  return (
    <div className="p-5 mb-20">
      <div className="bg-[url('/googlemap.jpg')] bg-no-repeat bg-cover w-full shadow-[0_0_50px_-10px] rounded-3xl">
        <Image
          src="/hand.webp"
          alt="mobile phone"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
    </div>
  )
}

export default Map
