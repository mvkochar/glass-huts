import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import './About.css'

const About = () => {
  return (
    <main>
        <section>
            <div className="about-main">
                <h3 className="about-main-title">About Us</h3>
                <div className="about-main-actions d-f">
                    <button className="about-main-btn" onClick={(event)=> event.preventDefault()}>Contact us</button>
                    <button className="about-main-btn" onClick={(event)=> event.preventDefault()}>Read FAQ</button>
                </div>
            </div>
        </section>
        <section>
            <div className="about-info d-f jc-sb align-center">
                <div className="about-info-img"><img src="images/about-info.png" alt="about-info" /></div>
                <div className="about-info-caption">
                    <h3 className="">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.”
                    </h3>
                    <p className="about-info-desc">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div className="about-media">
                <h3 className="about-media-title">Lorem ipsum dolor sit amet, consectetur adipiscing...</h3>
                <div className="about-media-box d-f">
                      <div className="about-media-item"><img src="images/about-media1.png" alt="about-media1" /></div>
                      <div className="about-media-item"><img src="images/about-media2.png" alt="about-media2" /></div>
                      <div className="about-media-item"><img src="images/about-media3.png" alt="about-media3" /></div>
                      <div className="about-media-item"><img src="images/about-media4.png" alt="about-media4" /></div>
                      <div className="about-media-item"><img src="images/about-media5.png" alt="about-media5" /></div>      
                </div>
            </div>
        </section>
        <section>
            <div className="about-touch">
                <h3 className="about-touch-title">Stay in touch with us</h3>
                <div className="about-touch-box d-f jc-sb">
                    <div className="about-touch-info">
                        <div className="about-touch-location">Vesterborg, Denmark</div>
                        <div className="about-touch-phone">+123 456 789 000</div>
                        <div className="about-touch-email">info@theglasshuts.com</div>
                        <div className="about-touch-social d-f">
                            <div><img src="images/instagram.png" alt="instagram" /></div>
                            <div><img src="images/facebook.png" alt="facebook" /></div>
                            <div><img src="images/twitter.png" alt="twitter" /></div>
                        </div>
                    </div>
                    <form className='about-touch-fm'>
                        <div className="about-touch-name d-f">
                            <input type="text" name='fName' placeholder='First Name' />
                            <input type="text" name='lName' placeholder='Last Name' />
                        </div>
                        <div className='email-bl'><input type="email" name="email" placeholder='Email'/></div>
                        <div className='subject-bl'><input type="text" name="subject" placeholder='Subject'/></div>
                        <textarea name="message" className='message-bl' value="Message"></textarea>
                        <ActionButton title='Send'/>
                    </form>
                </div>
            </div>
        </section>
        <section>
            <div className="about-love"><img src="images/love.png" alt="love" /></div>
        </section>
    </main>
  )
}

export default About