import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"

const Footer: React.FC = () => {
    return (
        <footer className="w-full flex justify-center items-center mb-20">
            <div className="max-w-[1400px] w-full flex justify-between items-start">
                <div className="basis-1/2 text-center grid gap-5">
                    <h1 className="text-4xl font-bold">Real Estate Company</h1>
                    <p>&copy;2024 CoStar Group, Inc.</p>
                    <div className="flex justify-center gap-5 py-5">
                        <FaFacebook size={50} />
                        <FaTwitter size={50} />
                        <FaLinkedin size={50} />
                        <FaInstagram size={50} />
                    </div>
                    <p>Equal Housing Opportunity</p>
                </div>
                <div className="basis-1/2 text-center grid gap-5">
                    <h1 className="text-xl font-bold">Advertisers</h1>
                    <p>Advertise</p>
                    <p>Add a Property</p>
                    <p>Digital Feeds Program</p>
                    <p>Customer Portal</p>
                    <p>Community Voice</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer