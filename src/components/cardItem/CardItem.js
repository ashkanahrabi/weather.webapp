import React from 'react';
import './cardItem.scss';

const CardItem = () => {
    return (
        <div className={`card-item`}>
            <div className="text-secondary text-small">11:00</div>
            <div className="card-item-icon"></div>
            <div className="text-primary text-medium">20</div>
        </div>
    );
};

export default CardItem;
