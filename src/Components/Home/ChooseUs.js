import React from "react";

const ChooseUs = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center ">
                <div>
                </div>
                <h2 style={{ color: "#00A9E4" }} className="font-bold text-4xl">Why choose us</h2>
                <h3>With many different ecommerce best practices around the web, it may be tempting to use each one. But more isn’t always 
                merrier. Not every practice works universally well for every retailer.</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pt-6 gap-8 mb-10 h-24 w-full sm:px-20 px-10">
                    {/* Remove class [ h-24 ] when adding a card block */}
                    <div className="rounded   border-gray-700  border-2 h-24" >dfgdfgdfgfd</div>

                    <div className="rounded   border-gray-700  border-2 h-24" ></div>

                    <div className="rounded   border-gray-700  border-2 h-24 " ></div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;
