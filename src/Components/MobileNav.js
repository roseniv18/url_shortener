import React from "react"

function MobileNav() {
    return (
        <div className=" flex flex-col items-center space-y-8 absolute top-24 bg-violet-900 m-auto m-0 py-8 pt-12 w-4/5 rounded-md">
            <div className="flex flex-col font-bold items-center items-center space-y-8 text-white">
                <span className="cursor-pointer">Features</span>
                <span className="cursor-pointer">Pricing</span>
                <span className="cursor-pointer">Resources</span>
            </div>
            <div className="text-md flex flex-col items-center justify-between space-y-8">
                <span className="font-bold text-white cursor-pointer">Login</span>
                <button className="rounded-full bg-teal-500 text-white py-2 px-6 w-40 cursor-pointer">
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default MobileNav
