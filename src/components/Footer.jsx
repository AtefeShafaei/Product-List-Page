import React from 'react';
import logo from "../assets/logo.png";

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
                    <li><a href='#'>پرسش و پاسخ</a></li>
                    <li><a href='#'>شرایط استفاده</a></li>
                    <li><a href='#'>گزارش باگ</a></li>
                </ul>
            </div>
    </div>
    </footer>
  )
}

export default Footer;