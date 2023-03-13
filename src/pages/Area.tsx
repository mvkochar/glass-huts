import React from 'react'
import './Area.css'

const Area = () => {
  return (
    <main>
        <section>
            <div className="area-main">
                <h3 className="area-main-title">The area</h3>
                <div className="area-main-location">Vesterborg, Denmark</div>
                <button className="area-main-btn" onClick={(event)=> event.preventDefault()}>Get directions</button>
            </div>
        </section>
        <section>
            <div className="area-about d-f jc-sb align-center">
                <div className="area-about-img"><img src="images/area-about1.png" alt="area-about1" /></div>
                <div className="area-about-info">
                    <h3 className="area-about-title">Vesterborg</h3>
                    <h4 className="area-about-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing...</h4>
                    <p className="area-about-desc">
                        Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd 
                        Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet 
                        and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine 
                        meters above ground.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div className="area-map d-f jc-sb align-center">
                <h3 className="area-map-title">Lorem ipsum dolor sit amet, consectetur adipiscing...</h3>
                <div><img src="images/map.png" alt="map" /></div>
            </div>
        </section>
        <section>
            <h3 className="area-about-title" style={{marginTop: "153px", marginLeft: "246px"}}>Activities</h3>
            <div className="area-about d-f jc-sb align-center">
                <div className="area-about-img"><img src="images/area-about2.png" alt="area-about2" /></div>
                <div className="area-about-info" style={{width: "447px"}}>
                    <h3 className="area-about-title">Restaurants & shopping</h3>
                    <h4 className="area-about-subtitle">Lorem Impus</h4>
                    <p className="area-about-desc">
                        Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd 
                        Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet 
                        and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine 
                        meters above ground.
                    </p>
                </div>
            </div>
            <div className="area-about d-f jc-sb align-center">
                <div className="area-about-info">
                    <h3 className="area-about-title">Experiences in nature</h3>
                    <h4 className="area-about-subtitle">Lorem Impus</h4>
                    <p className="area-about-desc">
                        Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd 
                        Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet 
                        and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine 
                        meters above ground.
                    </p>
                </div>
                <div className="area-about-img"><img src="images/area-about3.png" alt="area-about3" /></div>
            </div>
            <div className="area-about d-f jc-sb align-center">
                <div className="area-about-img"><img src="images/area-about4.png" alt="area-about4" /></div>
                <div className="area-about-info">
                    <h3 className="area-about-title">Go for a drive</h3>
                    <h4 className="area-about-subtitle">Lorem Impus</h4>
                    <p className="area-about-desc">
                        Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd 
                        Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet 
                        and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine 
                        meters above ground.
                    </p>
                </div>
            </div>
            <div className="area-about d-f jc-sb align-center">
                <div className="area-about-info">
                    <h3 className="area-about-title">Small-town charm</h3>
                    <h4 className="area-about-subtitle">Lorem Impus</h4>
                    <p className="area-about-desc">
                        Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd 
                        Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet 
                        and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine 
                        meters above ground.
                    </p>
                </div>
                <div className="area-about-img"><img src="images/area-about5.png" alt="area-about5" /></div>
            </div>
        </section>
        <section>
            <div style={{marginLeft: "100px", marginTop: "150px", width: "100%"}}>
                <img src="images/map2.png" alt="map2"  style={{width: "100%"}}/>
            </div>
        </section>
    </main>
  )
}

export default Area