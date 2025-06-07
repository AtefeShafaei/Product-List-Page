import React from 'react';
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className='footer'>

        <div className='footer-logo'>
            <img src={logo} alt='logo' />
            <p>تلفن پشتیبانی 021-55254822135</p>
            <p>پاسخگویی همه روزه</p>
        </div>

        <div className='footer-columns'>

            <div className='footer-item'>
                <p>درباره ما</p>
                <ul>
                    <li><a href='#'>تاریخچه</a></li>
                    <li><a href='#'>فرصت های شغلی</a></li>
                    <li><a href='#'>تماس با ما</a></li>
                </ul>
            </div>

            <div className='footer-item'>
                <p>راهنمای خرید</p>
                <ul>
                    <li><a href='#'>نحوه ثبت سفارش</a></li>
                    <li><a href='#'>رویه ارسال سفارش</a></li>
                    <li><a href='#'>شیوه پرداخت</a></li>
                </ul>
            </div>

            <div className='footer-item'>
                <p>خدمات مشتریان</p>
                <ul>
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