import React from 'react';
import './header.scss';
import {useSelectedTimeContext} from "../../utils/storage/selectedTimeSlot";
import {toCelsius} from "../../utils/numberMethods/toCelsius";
import WeatherIcon from "../weatherIcon/WeatherIcon";

const Header = ({city}) => {
    const [selectedTime] = useSelectedTimeContext();
    const weekday = new Date(selectedTime?.dt * 1000).toLocaleDateString('default', {weekday: 'long'});
    const dayOfMonth = new Date(selectedTime?.dt * 1000).toLocaleDateString('default', {day: '2-digit'});
    const month = new Date(selectedTime?.dt * 1000).toLocaleDateString('default', {month: 'long'});
    return (
        <div className={`header-container`} data-testid={'header-container'}>
            <div className={`header-icon`}>
                <WeatherIcon id={selectedTime?.weather[0].icon}/>
            </div>
            <div className={`header-temp-container align-items-center`}>
                <div className={`w-100 d-flex justify-content-between`}>
                    <div className="text-secondary text-small">{selectedTime?.weather[0].main}</div>
                    <div className="text-secondary text-small">{toCelsius(selectedTime?.main.temp_max)} / {toCelsius(selectedTime?.main.temp_min)}</div>
                </div>
                <div className={`text-primary text-extra-large`}>{toCelsius(selectedTime?.main.temp)}</div>
            </div>
            <div className={`header-date-container`}>
                <div className="text-secondary text-small">{city?.name}</div>
                <div className="text-primary text-medium">{weekday}</div>
                <div className="text-primary text-medium">{`${dayOfMonth}. ${month}`}</div>
            </div>
        </div>
    );
};

export default Header;
