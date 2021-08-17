import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className={`header-container`}>
            <div className={`header-icon`}></div>
            <div className={`header-temp-container align-items-center`}>
                <div className={`w-100 d-flex justify-content-between`}>
                    <div className="text-secondary text-small">cloudy</div>
                    <div className="text-secondary text-small">12 / 2</div>
                </div>
                <div className={`text-primary text-extra-large`}>7</div>
            </div>
            <div className={`header-date-container`}>
                <div className="text-secondary text-small">cloudy</div>
                <div className="text-primary text-medium">cloudy</div>
                <div className="text-primary text-medium">cloudy</div>
            </div>
        </div>
    );
};

export default Header;
