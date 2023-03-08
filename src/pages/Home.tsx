import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
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
                    <ActionButton title='Book now'/>
                    <div className="main-book-price">
                        from
                        <span>€3.200</span>
                        per night
                    </div>
                </div>
            </div>
        </section>

    </main>
  )
}

export default Home