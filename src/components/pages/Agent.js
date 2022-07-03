import React from 'react';
import './Agent.css';
import avater1 from '../../images/avatar-9.jpg';
import avater2 from '../../images/avatar-10.jpg';
import avater3 from '../../images/avatar-11.jpg';
import avater4 from '../../images/avatar-12.jpg';

const Agent = () => {
    return (
        <section className="agent content-area">
            <div className='mb-20'>
                <div className="title-section text-center">
                    <h1 className='uppercase'>our agent</h1>
                </div>
                <div className='title-border'>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                </div>
            </div>
            <div className="card-container grid grid-cols-1 lg:grid-cols-4 gap-5 mx-16 lg:mx-24">
                <div className="agent-card mb-8">
                    <div className="agent-image">
                        <img src={avater1} alt="" />
                        <div className="social_icon">
                        </div>
                    </div>
                    <div className="agent-info">
                        <h5>Michelle Nelson</h5>
                        <p>Support Manager</p>
                    </div>
                </div>
                <div className="agent-card mb-8">
                    <div className="agent-image">
                        <img src={avater2} alt="" />
                        <div className="social_icon">
                        </div>
                    </div>
                    <div className="agent-info">
                        <h5>Martin Smith</h5>
                        <p>Web Designer</p>
                    </div>
                </div>
                <div className="agent-card mb-8">
                    <div className="agent-image">
                        <img src={avater3} alt="" />
                        <div className="social_icon">
                        </div>
                    </div>
                    <div className="agent-info">
                        <h5>Carolyn Stone</h5>
                        <p>Creative Director</p>
                    </div>
                </div>
                <div className="agent-card mb-8">
                    <div className="agent-image">
                        <img src={avater4} alt="" />
                        <div className="social_icon">
                        </div>
                    </div>
                    <div className="agent-info">
                        <h5>Brandon Miller</h5>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agent;