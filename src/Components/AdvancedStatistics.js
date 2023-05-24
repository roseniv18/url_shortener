import React from "react"
import brand_recognition from "../images/icon-brand-recognition.svg"
import detailed_records from "../images/icon-detailed-records.svg"
import fully_customizable from "../images/icon-fully-customizable.svg"
import ShortenURL from "./ShortenURL"

function AdvancedStatistics({ isMobile }) {
    return (
        <section className="flex flex-col items-center justify-center bg-gray-200 w-full lg:px-32 md:px-16 sm:px-6 pb-32 relative">
            <ShortenURL isMobile={isMobile} />
            <h2 className="text-4xl text-gray-800 font-bold mb-5 text-center pt-20 ">
                Advanced Statistics
            </h2>
            <span className="text-center text-gray-500 mb-20">
                Track how your links are performing across the web with our advanced
                statistics dashboard.
            </span>

            <div className="flex lg:flex-row sm:flex-col lg:space-x-8 sm:space-x-0 lg:space-y-0 sm:space-y-8 relative">
                {/* Green Line */}
                <div
                    className="lg:h-2 lg:w-3/4 transform lg:top-1/2 lg:left-10 absolute bg-cyan-500 lg:rotate-0 lg:right-0
            sm:h-2 sm:w-full sm:transform sm:rotate-90 sm:top-1/2 sm-right-1/2"
                ></div>

                <div className="bg-white pt-20 px-12 pb-10 rounded-md relative">
                    <div className="flex items-center justify-center absolute transform -translate-y-1/2 top-0 rounded-full bg-violet-900 w-20 h-20 ">
                        <img src={brand_recognition} alt="" className="" />
                    </div>
                    <h2 className="text-2xl mb-6 font-bold">Brand Recognition</h2>
                    <span className="leading-8 text-lg">
                        Boost your brand recognition with each click. Generic links don't
                        mean a thing. Branded links help instil confidence in your
                        content.
                    </span>
                </div>

                <div className="bg-white pt-20 px-12 pb-10 rounded-md relative transform translate-y-8">
                    <div className="flex items-center justify-center absolute transform -translate-y-1/2 top-0 rounded-full bg-violet-900 w-20 h-20">
                        <img src={detailed_records} alt="" />
                    </div>

                    <h2 className="text-2xl mb-6 font-bold">Detailed Records</h2>
                    <span className="leading-8 text-lg">
                        Gain insights into who is clicking your links. Knowing when and
                        where people engage with your content helps inform better
                        decisions.
                    </span>
                </div>

                <div className="bg-white pt-20 px-12 pb-10 rounded-md relative transform translate-y-16">
                    <div className="flex items-center justify-center absolute transform -translate-y-10 top-0 rounded-full bg-violet-900 w-20 h-20">
                        <img src={fully_customizable} alt="" />
                    </div>
                    <h2 className="text-2xl mb-6 font-bold">Fully Customizable</h2>
                    <span className="leading-8 text-lg">
                        Improve brand awareness and content discoverability through
                        customizable links, supercharging audience engagement.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default AdvancedStatistics
