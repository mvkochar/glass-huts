import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import Facility from '../components/Facility/Facility'
import './Home.css'

const Home = () => {
    return (
        <main>
            <section>
                <div className="glass-main-wr">
                    <div className="glass-main">
                        <h3 className="glass-main-title">Find peace in the Forest</h3>
                        <h4 className="glass-main-subtitle">Come and stay in out hut hotel near Mariager Fjord in Denmark</h4>
                    </div>
                    <div className="glass-main-book d-f">
                        <ActionButton title='Book now' />
                        <div className="main-book-price">
                            from
                            <span>€3.200</span>
                            per night
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="glass-cabins d-f jc-sb">
                    <div className="glass-cabins-info">
                        <h3 className="glass-cabins-title">The Cabins</h3>
                        <p className="glass-cabins-desc">
                            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen.
                            They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor
                            shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.
                            The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.
                        </p>
                        <a href="" className="glass-cabins-more">Read More</a>
                    </div>
                    <div className="glass-cabins-img"><img src="images/cabins.png" alt="cabins" /></div>
                </div>
            </section>
            <section>
                <div className="glass-gallery d-f">
                    <div className="glass-gallery-item"><img src="images/gallery1.png" alt="gallery1" /></div>
                    <div className="glass-gallery-item"><img src="images/gallery2.png" alt="gallery2" /></div>
                    <div className="glass-gallery-item"><img src="images/gallery3.png" alt="gallery3" /></div>
                </div>
            </section>
            <section>
                <div className="glass-forest d-f align-center">
                    <div className="glass-forest-map"><img src="images/forest.png" alt="forest" /></div>
                    <div className="glass-forest-info">
                        <h3 className="glass-forest-title">The forest</h3>
                        <p className="glass-forest-desc">
                            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen.
                            They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet
                            and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is
                            about nine meters above ground. The cottages are built around tall, old trees that go through
                            the entire cottage from floor to ceiling.
                        </p>
                        <a href="" className="glass-forest-more">Read More</a>
                    </div>
                </div>
            </section>
            <section>
                <div className="glass-facilities">
                    <h3 className="glass-facilities-title">Facilities</h3>
                    <div className="glass-facilities-box d-f jc-sb">
                        <Facility image='images/facility1.png' title='Mini fridge' />
                        <Facility image='images/facility2.png' title='Kitchenette' />
                        <Facility image='images/facility3.png' title='Coffee machine' />
                        <Facility image='images/facility4.png' title='Electric tea kettle' />
                        <Facility image='images/facility5.png' title='Parking' />
                        <Facility image='images/facility6.png' title='Breathtaking views' />
                        <Facility image='images/facility7.png' title='Floor heating' />
                        <Facility image='images/facility8.png' title='230V' />
                        <Facility image='images/facility9.png' title='Wifi' />
                        <Facility image='images/facility10.png' title='Shower' />
                        <Facility image='images/facility11.png' title='Flushing toilets' />
                        <Facility image='images/facility12.png' title='Bedding & towels' />
                    </div>
                </div>
            </section>
            <section>
                <div className="glass-more">
                    <div className="glass-more-images">
                        <img src="images/more1.png" alt="more1" />
                        <img src="images/more2.png" alt="more2" />
                    </div>
                    <div className="glass-more-about">More about us</div>
                </div>
            </section>
            <section>
                <div className="glass-contact d-f jc-sb">
                    <div className="glass-contact-info">
                        <h3 className="glass-contact-title">Stay in touch with us</h3>
                        <div className="glass-contact-location">Vesterborg, Denmark</div>
                        <div className="glass-contact-phone">+123 456 789 000</div>
                        <div className="glass-contact-email">nfo@theglasshuts.com</div>
                        <div className="glass-contact-social d-f">
                            <div><img src="images/instagram.png" alt="instagram" /></div>
                            <div><img src="images/facebook.png" alt="facebook" /></div>
                            <div><img src="images/twitter.png" alt="twitter" /></div>
                        </div>
                    </div>
                    <div className="glass-contact-action">
                        <div className="glass-contact-img"><img src="images/panorama.png" alt="panorama" /></div>
                        <div className="glass-contact-book d-f">
                            <ActionButton title='Book a hut' />
                            <div className="main-book-price">
                                from
                                <span>€3.200</span>
                                per night
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home