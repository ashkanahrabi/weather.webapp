import React, {useEffect, useState} from 'react';
import './home.scss';
import Header from "../../components/header/Header";
import CardSlider from "../../components/cardSlider/CardSlider";

const Home = () => {
    const [weatherData, setWeatherData] = useState();
    useEffect(() => {

    }, []);
    return (
        <div className={`home-container`}>
            <Header />
            <CardSlider />
        </div>
    );
};

export default Home;
