import React, { useEffect, useState } from 'react';
import Car from './Car';
import './Featured.css'

const Featured = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setCars(data);
        })
    },[])
    return (
        <section className="featured my-20 mx-16">
                <div className='mb-20'>
                <div className="title-section text-center">
                    <h1 className='uppercase'>featured cars</h1>
                </div>
                <div className='title-border'>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                </div>
                </div>
                <div className='grid grid-cols-3 gap-5 text-center'>
                    {
                        cars.map(car => <Car
                        key={car.id}
                        car = {car}
                        ></Car>)
                    }
                </div>

        </section>
    );
};

export default Featured;