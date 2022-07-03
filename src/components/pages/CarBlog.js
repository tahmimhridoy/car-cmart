import React from 'react';
import './CarBlog.css';
import blog1 from '../../images/blog-3.jpg';
import blog2 from '../../images/blog-2.jpg';
import blog3 from '../../images/blog-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCommentSms, faUser } from '@fortawesome/free-solid-svg-icons';

const CarBlog = () => {
    return (
        <section className="carblog content-area">
            <div className='mb-20'>
                <div className="title-section text-center">
                    <h1 className='uppercase'>our Blogs</h1>
                </div>
                <div className='title-border'>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                    <div className="title-border-inner"></div>
                </div>
            </div>
            <div className="blog-container grid grid-cols-1 lg:grid-cols-3 gap-12 mx-8 lg:mx-20">
                <div className="blog">
                    <div className="blog-img">
                        <img src={blog1} alt="" />
                        <div className="admin">
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faUser}></FontAwesomeIcon>
                                <p>Admin</p>
                            </div>
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faCommentSms}></FontAwesomeIcon>
                                <p>17K</p>
                            </div>
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faCalendar}></FontAwesomeIcon>
                                <p>73K</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-detail">
                        <h2 className='blog-title'>Are You Ready for the online Dealership?</h2>
                        <p className="blog-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        
                        <div className="date">
                            <p>14 Feb</p>
                        </div>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-img">
                        <img src={blog2} alt="" />
                        <div className="admin">
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faUser}></FontAwesomeIcon>
                                <p>Admin</p>
                            </div>
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faCommentSms}></FontAwesomeIcon>
                                <p>17K</p>
                            </div>
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faCalendar}></FontAwesomeIcon>
                                <p>73K</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-detail">
                        <h2 className='blog-title'>Are You Ready for the online Dealership?</h2>
                        <p className="blog-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        
                        <div className="date">
                            <p>14 Feb</p>
                        </div>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-img">
                        <img src={blog3} alt="" />
                        <div className="admin">
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faUser}></FontAwesomeIcon>
                                <p>Admin</p>
                            </div>
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faCommentSms}></FontAwesomeIcon>
                                <p>17K</p>
                            </div>
                            <div className="admin1">
                                <FontAwesomeIcon className="star" icon={faCalendar}></FontAwesomeIcon>
                                <p>73K</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-detail">
                        <h2 className='blog-title'>Are You Ready for the online Dealership?</h2>
                        <p className="blog-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        
                        <div className="date">
                            <p>14 Feb</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarBlog;