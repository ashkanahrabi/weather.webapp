import React, {Fragment, useContext, useEffect} from 'react';
import './home.scss';
import Header from "../../components/header/Header";
import CardSlider from "../../components/cardSlider/CardSlider";
import {useDataFetch} from "../../utils/customHooks/useDataFetch";
import {SelectedTimeSlotContext} from "../../utils/storage/selectedTimeSlot";

const Home = () => {
    const [selectedTime, setSelectedTime] = useContext(SelectedTimeSlotContext);
    const apiParams = {
        method: 'GET',
        url: '/api'
    };
    const [apiResponse] = useDataFetch(apiParams);
    useEffect(() => {
        if(apiResponse.data && !apiResponse.isError){
            // const currentTimestamp = Date.now() / 1000;
            // let selectedItem = null;
            // apiResponse.data.list.forEach(item => {
            //     if(item.dt < currentTimestamp){
            //         selectedItem = item;
            //     }
            // });
            setSelectedTime(apiResponse.data.list[0])
        }
    }, [apiResponse, setSelectedTime]);
    return (
        <div className={`home-container`}>
            {
                apiResponse.isLoading ?
                    <div className="w-100 h-100 d-flex justify-content-center align-items-center text-primary text-large">Loading...</div> :
                    apiResponse.data ?
                        <Fragment>
                            <Header city={apiResponse.data.city}/>
                            <CardSlider cardItem={apiResponse.data.list}/>
                        </Fragment> :
                        ''
            }
        </div>
    );
};

export default Home;
