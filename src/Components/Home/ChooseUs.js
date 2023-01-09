import React from "react";

const ChooseUs = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-10">
                <div className="px-2">
                    <h2 style={{ color: "#00A9E4" }} className="font-bold text-4xl">Why choose us</h2>
                    <p className="py-8">With many different ecommerce best practices around the web, it may be tempting to use each one. But more isn’t always <br /> 
                    merrier. Not every practice works universally well for every retailer.</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pt-6 gap-8 h-24 w-full sm:px-32 px-10">
                    {/* Remove class [ h-24 ] when adding a card block */}
                    <div className="rounded-tr-3xl shadow-xl border border-l-8 border-sky-500 h-24" >dfgdfgdfgfd</div>

                    <div className="rounded-tr-3xl shadow-xl border border-l-8 border-sky-500 h-24"></div>

                    <div className="rounded-tr-3xl shadow-xl border border-l-8 border-sky-500 h-24" ></div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pt-6 gap-8 h-24 w-full sm:px-32 px-10 mt-10">
                    {/* Remove class [ h-24 ] when adding a card block */}
                    <div className="rounded-tr-3xl shadow-xl border border-l-8 border-sky-500 h-24" >dfgdfgdfgfd</div>

                    <div className="rounded-tr-3xl shadow-xl border border-l-8 border-sky-500 h-24"></div>

                    <div className="rounded-tr-3xl shadow-xl border border-l-8 border-sky-500 h-24" ></div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;
