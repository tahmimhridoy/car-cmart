import { faBrush, faCalendar, faCar, faGasPump, faLocationDot, faMeteor, faRoad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Car.css';

const Car = ({car}) => {
    const {name, img, location, kilometer, color, fuel, type, year, status} = car;
    return (
        <div className='car-box'>
            <div className="car-thumbnail">
                <div className="tag-1 bg-active">Featured</div>
                <div className="price-box">
                    <sup>$</sup>
                    800
                    <span className='month'>/month</span>
                </div>
                <img src={img} alt="" className='car-img'/>
            </div>
            <div className="car-details">
                <h1 className="model">{name}</h1>
                <div className="location flex items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{location}</p>
                </div>
                <ul className='wrapper grid grid-cols-3 gap-4'>
                    <li className='flex items-center'>
                        <FontAwesomeIcon className="icon" icon={faRoad}></FontAwesomeIcon>
                        <p>{kilometer}</p>
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon className="icon" icon={faMeteor}></FontAwesomeIcon>
                        <p>{status}</p>
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon className="icon" icon={faCalendar}></FontAwesomeIcon>
                        <p>{year}</p>
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon className='icon' icon={faGasPump}></FontAwesomeIcon>
                        <p>{fuel}</p>
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon className="icon" icon={faCar}></FontAwesomeIcon>
                        <p>{type}</p>
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon className="icon" icon={faBrush}></FontAwesomeIcon>
                        <p>{color}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Car;