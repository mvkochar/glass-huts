import React from 'react'
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
    </main>
  )
}

export default About