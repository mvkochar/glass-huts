import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer d-f jc-sb">
        <div className="footer-newsletter">
            <div className="footer-newsletter-title">Newsletter</div>
            <form className='footer-newsletter-fm d-f'>
                <input type="email" name="email" placeholder='Email Address'/>
                <button type="submit" onClick={(event) => event.preventDefault()}><img src="images/arrow1.png" alt="arrow1"/></button>
            </form>
            <div className="footer-newsletter-info">Sign up to our newsletter for special things and receive 10% off your next order.</div>
            <div className="footer-rights">&copy; 2021 The Glass Huts</div> 
        </div>
        <div className="footer-about">
            <ul className="footer-links d-f">
                <li className="footer-links-item"><a href="">TERMS AND CONDITIONS</a></li>
                <li className="footer-links-item"><a href="">CENCELLATION POLICY</a></li>
                <li className="footer-links-item"><a href="">PRIVACY POLICY</a></li>
            </ul>
            <div className="footer-payments d-f">
                <div><img src="images/payments1.png" alt="PayPal" /></div>
                <div><img src="images/payments2.png" alt="MasterCard" /></div>
                <div><img src="images/payments3.png" alt="VISA" /></div>
                <div><img src="images/payments4.png" alt="Bank" /></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer