import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelope, faLocation, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons';
import small1 from '../../images/small-car-1.jpg';
import small2 from '../../images/small-car-2.jpg';
import small3 from '../../images/small-car-3.jpg';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container mx-12 content-area">
                <div className="contact">
                    <h2 className="heading">contact info</h2>
                    <div className="icon-text flex items-center">
                        <FontAwesomeIcon className='footer-icon' icon={faLocation}></FontAwesomeIcon>
                        <p className='px-2'>20/F Green Road, Dhanmondi, Dhaka</p>
                    </div>
                    <div className="icon-text flex items-center">
                        <FontAwesomeIcon className='footer-icon' icon={faEnvelope}></FontAwesomeIcon>
                        <p className='px-2'>info@themevessel.com</p>
                    </div>
                    <div className="icon-text flex items-center">
                        <FontAwesomeIcon className='footer-icon' icon={faPhone}></FontAwesomeIcon>
                        <p className='px-2'>+0477 85X6 552</p>
                    </div>
                    <div className="icon-text flex items-center">
                        <FontAwesomeIcon className='footer-icon' icon={faPhone}></FontAwesomeIcon>
                        <p className='px-2'>+0477 85X6 552</p>
                    </div>
                </div>
                <div className="links">
                    <h2 className="heading">USEFUL LINKS</h2>
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>About us</p></li>
                        <li><p>Services</p></li>
                        <li><p>FQA</p></li>
                        <li><p>Contact Us</p></li>
                        <li><p>Car Compare</p></li>
                        <li><p>Car Review</p></li>
                    </ul>
                </div>
                <div className="recent-post">
                    <h2 className="heading">RECENT POST</h2>
                    <div className="post flex items-center">
                        <img src={small1} alt="" />
                        <div className="text">
                            <h2>Bentley Continental GT</h2>
                            <p>$345,00 | <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon><span> Jan 12, 2021</span></p>
                        </div>
                    </div>
                    <div className="post flex items-center">
                        <img src={small2} alt="" />
                        <div className="text">
                            <h2>Fiat Punto Red</h2>
                            <p>$345,00 | <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon><span> Jan 12, 2021</span></p>
                        </div>
                    </div>
                    <div className="post flex items-center">
                        <img src={small3} alt="" />
                        <div className="text">
                            <h2>Nissan Micra Gen5</h2>
                            <p>$345,00 | <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon><span> Jan 12, 2021</span></p>
                        </div>
                    </div>
                </div>
                <div className="subscribe">
                    <h2 className="heading">SUBSCRIBE</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <div className="input-container">
                        <input type="text" placeholder='Type Email'/>
                        <input type="submit" value="Submit" className='submit'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;