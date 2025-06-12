import React from 'react';
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTelegram, FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <footer className='footer'>

        <div className='footer-logo'>
            <img src={logo} alt='logo' />
            <p>تلفن پشتیبانی 25585885772 - 021 |  پاسخگویی همه روزه </p>
        </div> 

        <div className='footer-columns'>

            <div className='footer-item'>
                <ul>
                    <p>درباره ما</p>
                    <li><a href='#'>تاریخچه</a></li>
                    <li><a href='#'>فرصت های شغلی</a></li>
                    <li><a href='#'>تماس با ما</a></li>
                </ul>
            </div>

            <div className='footer-item'>
                <ul>
                    <p>راهنمای خرید</p>
                    <li><a href='#'>نحوه ثبت سفارش</a></li>
                    <li><a href='#'>رویه ارسال سفارش</a></li>
                    <li><a href='#'>شیوه پرداخت</a></li>
                </ul>
            </div>

            <div className='footer-item'>
                <ul>
                    <p>خدمات مشتریان</p>
                    <li><a href='#'>پرسش و پاسخ</a></li>
                    <li><a href='#'>شرایط استفاده</a></li>
                    <li><a href='#'>گزارش باگ</a></li>
                </ul>
            </div>

            <div className='footer-item'>
                <ul>
                    <p>شبکه های اجتماعی</p>

                    <div className='items'>

                        <li className='item'><a href='#'>
                            <FaInstagram size={24} />
                            </a>
                        </li>

                        <li className='item'><a href='#'>
                            <FaLinkedinIn size={24} />
                            </a>
                        </li>

                        <li className='item'><a href='#'>
                            <FaTelegram size={24} />
                            </a>
                        </li>

                        <li className='item'><a href='#'>
                            <FaFacebookF size={24} />
                            </a>
                        </li>

                    </div>

                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;