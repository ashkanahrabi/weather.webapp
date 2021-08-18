import React, {useContext} from 'react';
import './cardItem.scss';
import {toCelsius} from "../../utils/numberMethods/toCelsius";
import WeatherIcon from "../weatherIcon/WeatherIcon";
import {SelectedTimeSlotContext} from "../../utils/storage/selectedTimeSlot";

const CardItem = ({data}) => {
    const [selectedTime, setSelectedTime] = useContext(SelectedTimeSlotContext);
    const localeOptions = {
        hour: '2-digit',
        minute:'2-digit'
    };
    const time = new Date(data.dt * 1000).toLocaleTimeString('en-GB', localeOptions);
    const temp = toCelsius(data.main.temp);
    return (
        <div className={`card-item ${selectedTime?.dt === data.dt && `item-active`}`} onClick={() => setSelectedTime(data)}>
            <div className="text-secondary text-small">{time}</div>
            <div className="card-item-icon">
                <WeatherIcon id={data.weather[0].icon}/>
            </div>
            <div className="text-primary text-medium">{temp}</div>
        </div>
    );
};

export default CardItem;
