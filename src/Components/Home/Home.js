import React from "react";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import HeroFood from "./HeroFood";
import HeroLaptop from "./HeroLaptop";

const Home = () => {
    return (
        <>
            <Banner />
            <HeroLaptop />
            <HeroFood />
            <ChooseUs />
        </>
    );
};

export default Home;
