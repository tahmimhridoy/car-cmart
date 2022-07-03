import React from 'react';
import './Offers.css';
import img1 from '../../images/car-4.jpg';
import img2 from '../../images/car-11.jpg';
import img3 from '../../images/car-1.jpg';
import img4 from '../../images/car-6.jpg';
import img5 from '../../images/car-2.jpg';

const Offers = () => {
    return (
        <div className='my-20'>
            <div className='mb-20'>
                <div className="title-section text-center">
                    <h1 className='uppercase'>Latest Offer</h1>
                </div>
                <div className='title-border'>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                </div>
            </div>
            <div className="img-container mx-8 lg:mx-20">
                <div className="single-img">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="text-container">
                        <div className="new">
                            <p>new</p>
                        </div>
                        <div className="info">
                            <h3>Toyota Prius specs</h3>
                            <h5>
                                $920.00 <span>/monthly</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="single-img single2">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="text-container">
                        <div className="new">
                            <p>new</p>
                        </div>
                        <div className="info">
                            <h3>Toyota Prius specs</h3>
                            <h5>
                                $920.00 <span>/monthly</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="single-img">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="text-container">
                        <div className="new">
                            <p>new</p>
                        </div>
                        <div className="info">
                            <h3>Toyota Prius specs</h3>
                            <h5>
                                $920.00 <span>/monthly</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="single-img">
                    <div className="img">
                        <img src={img4} alt="" />
                    </div>
                    <div className="text-container">
                        <div className="new">
                            <p>new</p>
                        </div>
                        <div className="info">
                            <h3>Toyota Prius specs</h3>
                            <h5>
                                $920.00 <span>/monthly</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="single-img">
                    <div className="img">
                        <img src={img5} alt="" />
                    </div>
                    <div className="text-container">
                        <div className="new">
                            <p>new</p>
                        </div>
                        <div className="info">
                            <h3>Toyota Prius specs</h3>
                            <h5>
                                $920.00 <span>/monthly</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;