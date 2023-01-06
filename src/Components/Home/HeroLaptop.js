import React from "react";

const HeroLaptop = () => {
    return (
        <>
            <div className="card flex sm:flex-row flex-col bg-base-100  mb-10">
                <div className="text-start sm:w-1/2 h-96">
                    <img
                        className="w-full "
                        src="https://placeimg.com/400/400/arch"
                        alt="Album"
                    />
                </div>
                <div className="text-start mt-10 sm:ml-10 px-5 sm:w-1/2">
                    <h1 className="text-5xl font-bold">LAPTOP</h1>
                    <p className="py-2">
                        A fast-loading e-commerce website with quality content increases organic
                        traffic and gives you a stream of targeted visitors. You get a fully
                        optimized e-commerce website that takes top positions of search engine
                        results and boosts both your brand awareness and sales.Provide flexible,
                        personalized website search and navigation in your turn-key digital store to
                        ensure a delightful customer experience . We will support you at every step
                        of e-commerce website development
                    </p>

                    <p className="py-3">
                        A fast-loading e-commerce website with quality content increases organic
                        traffic and gives you a stream of targeted visitors. You get a fully
                        optimized e-commerce website that takes top positions of search engine
                        results and boosts both your brand awareness and sales.Provide flexible,
                        personalized website search and navigation in your turn-key digital store to
                        ensure a delightful customer experience . We will support you at every step
                        of e-commerce website development
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

            <div className="card flex flex-row bg-base-100  mb-10">
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div>
                    <img src="https://placeimg.com/400/400/arch" alt="Album" />
                </div>
            </div>
        </>
    );
};

export default HeroLaptop;
