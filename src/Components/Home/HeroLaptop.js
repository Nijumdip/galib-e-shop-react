import React from "react";

const HeroLaptop = () => {
    return (
        <>
            <div className="flex flex-row  mb-10">
                <div>
                    <img
                        src="https://placeimg.com/400/400/arch"
                        alt="Album" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100  mb-10">
                
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <figure>
                    <img
                        src="https://placeimg.com/400/400/arch"
                        alt="Album" />
                </figure>
            </div>
        </>
    );
};

export default HeroLaptop;
