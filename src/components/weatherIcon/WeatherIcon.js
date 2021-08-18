import {iconPack} from "../../styles/icons";

const WeatherIcon = ({id}) => {
    switch (id){
        case '01d':
        case '01n':
            return iconPack.weather_sun;
        default:
            return iconPack.weather_cloud
    }
};
export default WeatherIcon;
