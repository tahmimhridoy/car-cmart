import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Testimonial.css';
import person1 from '../../images/avatar-3.jpg';
import person2 from '../../images/avatar-2.jpg';

const Testimonial = () => {
    return (
        <section className="testimonial content-area">
            <div className='mb-20'>
                <div className="title-section text-center">
                    <h1 className='uppercase'>our testimonial</h1>
                </div>
                <div className='title-border'>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                </div>
            </div>
            <div className="testimonial-container grid grid-cols-2 gap-20 mx-20">
                <div className="testimony">
                    <div className="tes-details">
                        <h3>Maikel Alisa</h3>
                        <p className='title'>Creative Director</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everLorem industry's standard dummy text everLorem.</p>
                        <div className="ratings">
                            <FontAwesomeIcon className='start' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='start' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='start' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='start' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='start' icon={faStarHalf}></FontAwesomeIcon>
                            <p>Ratings</p>
                        </div>
                    </div>
                    <div className="tes-image">
                        <img src={person1} alt="" />
                    </div>  
                </div>
                <div className="testimony">
                    <div className="tes-details">
                        <h3>
                            Maikel Alisa
                        </h3>
                        <p className='title'>Creative Director</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everLorem industry's standard dummy text everLorem.</p>
                        <div className="ratings">
                            <FontAwesomeIcon className='start' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='start' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='start' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='start' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='start' icon={faStarHalf}></FontAwesomeIcon>
                            <p>Ratings</p>
                        </div>
                    </div>
                    <div className="tes-image">
                        <img src={person2} alt="" />
                    </div>  
                </div>
            </div>
        </section>
    );
};

export default Testimonial;