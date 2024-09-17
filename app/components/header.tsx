import Image from "next/image"
import React from "react"

const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-center items-center">
            <div className="p-5 max-w-[1400px] w-full flex justify-between items-center">
                <Image
                    src="/logo.webp"
                    alt="Real Estate Logo"
                    width={100}
                    height={100}
                    className="rounded-3xl sm:block hidden"
                />
                <h1 className="text-black font-bold text-3xl font-pavelt">Real Estate</h1>
                <div className="flex gap-5 text-lg font-bold">
                    <button
                        type="button"
                        className="px-5 py-3 text-base font-semibold text-white bg-[#0066cc] border border-transparent rounded-md shadow-sm hover:bg-white hover:text-[#0066cc] hover:border-[#0066cc] transition-colors duration-500 ease-in-out"
                    >Search</button>
                    <button
                        type="button"
                        className="px-5 py-3 text-base font-semibold text-white bg-[#0066cc] border border-transparent rounded-md shadow-sm hover:bg-white hover:text-[#0066cc] hover:border-[#0066cc] transition-colors duration-500 ease-in-out"
                    >Log In</button>
                </div>
            </div>
        </header>
    )
}

export default Header