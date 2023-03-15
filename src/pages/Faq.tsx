import React from 'react'
import FaqSection from '../components/FaqSection/FaqSection'
import './Faq.css'

const Faq = () => {
  return (
    <main>
        <section style={{marginTop: "97px"}}><FaqSection title='Prices'/></section>
        <section><FaqSection title='THE WALK UP TO GLASS HUT' /></section>
        <section><FaqSection title='CAPACITY'/></section>
        <section><FaqSection title='Pets'/></section>
        <section><FaqSection title='CHECK-IN / CHECK-OUT'/></section>    
    </main>
  )
}

export default Faq