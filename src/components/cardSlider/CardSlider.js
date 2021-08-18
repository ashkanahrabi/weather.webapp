import React from 'react';
import './cardSlider.scss';
import CardItem from "../cardItem/CardItem";

const CardSlider = ({cardItem}) => {
    return (
        <div className={`card-slider-container`}>
            {
                cardItem.map((item) => <CardItem data={item} key={item.dt}/>)
            }
        </div>
    );
};

export default CardSlider;
