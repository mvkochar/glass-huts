import React from 'react'

type FaqSectionProps = {
    title: string
}

const FaqSection = ({title}:FaqSectionProps) => {
    
    const [visible, setVisible] = React.useState(false) 

    const onBtnClick = () => {
        setVisible((prevState) => {
            return prevState ? false : true
        })
    }

    return (
        <>
            <div className="faq-section d-f jc-sb">
                <h3 className="faq-section-title">{title}</h3>
                <button className='faq-section-btn' onClick={onBtnClick}><img src="images/arrow-btn.png" alt="arrow-btn" /></button>
            </div>
            <div className= {visible? "faq-policy d-b" : "faq-policy d-n"} >
                <h3 className="faq-policy-title">CANCELLATION POLICY</h3>
                <p className="faq-policy-desc">Cancellation four weeks prior = 100% refund</p>
                <p className="faq-policy-desc">Cancellation two weeks prior = 50% refund</p>
                <p className="faq-policy-desc">Cancellation later than two weeks = full payment</p>
            </div>
        </>
    )
}

export default FaqSection