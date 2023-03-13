import React from 'react'
import './Hut.css'

const Hut = () => {
  return (
    <main>
        <section>
          <div className="hut-main">
            <h3 className="hut-main-title">The Hut</h3>
          </div>
        </section>
        <section>
           <div className="hut-about d-f jc-sb align-center">
              <div className="hut-about-img"><img src="images/hut-about1.png" alt="hut-about1" /></div>
              <div className="hut-about-info">
                <h3 className="hut-about-title">The Outside</h3>
                <h4 className="hut-about-subtitle">Hot tube</h4>
                <p className="hut-about-desc">
                  Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. 
                  They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor 
                  shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. 
                </p>
              </div>
           </div>
           <div className="hut-about d-f jc-sb align-center">
              <div className="hut-about-info">
                <h3 className="hut-about-title">The Inside</h3>
                <h4 className="hut-about-subtitle">Space</h4>
                <p className="hut-about-desc">
                  Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. 
                  They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor 
                  shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. 
                  The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.
                </p>
              </div>
              <div className="hut-about-img"><img src="images/hut-about2.png" alt="hut-about2" /></div>
           </div>
           <div className="hut-about d-f jc-sb align-center">
              <div className="hut-about-img"><img src="images/hut-about3.png" alt="hut-about3" /></div>
              <div className="hut-about-info">
                <h3 className="hut-about-title">Practicalities</h3>
                <h4 className="hut-about-subtitle">Breakfast</h4>
                <p className="hut-about-desc">
                  Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. 
                  They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor 
                  shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. 
                </p>
              </div>
           </div>
        </section>
    </main>
  )
}

export default Hut