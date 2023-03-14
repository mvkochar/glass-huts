import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import './Booking.css'

const Booking = () => {
    return (
        <main>
            <section>
                <div className="booking-main">
                    <h3 className="booking-main-title">Booking</h3>
                    <div className="booking-main-location">Vesterborg, Denmark</div>
                </div>
            </section>
            <section>
                <div className="d-f jc-sb align-center" 
                    style={{ marginLeft: "246px", marginRight: "32px", marginTop: "150px" }}>
                    <div className="booking-choose">
                        <h3 className="booking-choose-title">Choose Additional Services</h3>
                        <div className='booking-choose-input'>
                            <input type="radio" name="breakfast" />
                            Fresh Breakfast for one <span>400kr</span>
                        </div>
                        <div className='booking-choose-input'>
                            <input type="radio" name="breakfast" checked/>
                            Fresh Breakfast for two <span>500kr</span>
                        </div>
                         <div className="booking-choose-cat">Classic Dinner</div>
                         <div className="booking-choose-desc">Bread, Coffee, milk, juice, and a selection of spreads + toppings.</div>
                         <div className='booking-choose-input'>
                            <input type="radio" name="dinner" checked />
                            Classic Dinner for one <span>600kr</span>
                        </div>
                        <div className='booking-choose-input'>
                            <input type="radio" name="dinner" />
                            Classic Dinner for two <span>800kr</span>
                        </div>
                        <div className='booking-choose-input'>
                            <input type="radio" name="dinner" />
                            Electric Car Charge <span>800kr</span>
                        </div>     
                    </div>
                    <div className="booking-choose-order"><img src="images/price.png" alt="order" /></div>
                </div>
            </section>
            <section>
                <div className="booking-about">
                    <h3 className="booking-about-title">Hut rules</h3>
                    <ul className="booking-about-list">
                        <li>Check-in:  2:00 PM - 11:00 PM</li>
                        <li>Checkout: 11:00 AM</li>
                        <li>Not suitable for children and infants</li>
                        <li>No smoking</li>
                        <li>No pets</li>
                    </ul>
                </div>
                <div className="booking-about">
                    <h3 className="booking-about-title">Cancellation policy</h3>
                    <ul className="booking-about-list" style={{width: "657px"}}>
                        <li>Free cancellation until 1:00 PM on Mar 27</li>
                        <li style={{lineHeight: "28px"}}>After that, cancel before 2:00 PM on Apr 1 and 
                            get a 50% refund, minus the first night and service fee.
                        </li>
                    </ul>
                </div>
                <div className="booking-about">
                    <h3 className="booking-about-title">Important Information</h3>
                    <p className="booking-about-desc">
                        You need to hike a steep hill to arrive at the tree houses, it takes approx 20-30 minutes on a trail 
                        with stairs and uneven ground.
                    </p>
                </div>
                <div className="booking-about-action">
                    <ActionButton title='Read faq' />
                </div>
            </section>
        </main>
    )
}

export default Booking