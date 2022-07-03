import { faShieldCat, faHandshake, faDollarSign, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Advantage.css';

const Advantage = () => {
    return (
        <section className="advantage content-area">
            <div className='mb-20'>
                <div className="title-section text-center">
                    <h1 className='uppercase'>our advantage</h1>
                </div>
                <div className='title-border'>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-20">
                    <div className="ad-container">
                        <div className="icon">
                            <FontAwesomeIcon icon={faShieldCat}></FontAwesomeIcon>
                        </div>
                        <div className="detail">
                            <h4>Highly Secured</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        </div>
                    </div>
                    <div className="ad-container">
                        <div className="icon">
                            <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                        </div>
                        <div className="detail">
                            <h4>Trusted Agents</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        </div>
                    </div>
                    <div className="ad-container">
                        <div className="icon">
                            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                        </div>
                        <div className="detail">
                            <h4>Get an offer</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        </div>
                    </div>
                    <div className="ad-container">
                        <div className="icon">
                            <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
                        </div>
                        <div className="detail">
                            <h4>Free Support</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Advantage;