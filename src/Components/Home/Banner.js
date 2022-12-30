import React from "react";

const Banner = () => {
    return (
        <>
            <h1
                href="/"
                className=" normal-case font-bold text-3xl text-white absolute z-10 right-2/4 bottom-2/4"
            >
                Galib's E Shop
            </h1>
            <div className="w-full h-full relative">
                <img
                    src="https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/48e65be9-308d-4748-8e4c-0acef4c98f11/commercial-crime-insurance-header.jpg?w=930&h=335&fit=crop"
                    alt="laptop"
                    className="w-full"
                />
            </div>

            <div style={{ background: "#00A9E4" }} className=" py-9 "></div>
            
        </>
    );
};

export default Banner;
