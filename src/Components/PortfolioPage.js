import React, { useState } from 'react';

function PortfolioPage(props) {
    const [activeButton, setActiveButton] = useState('all');

    const handleButtonName = (e) => {
        console.log('handleButtonName', e.target.name);
        setActiveButton(e.target.name);
    }

    return (
        <div>
            <h4>MY PORTFOLIO</h4>
            <div className="row">
                <div className="col-12 position-relative">
                    <div className="position-absolute start-50" >
                        <button type="button" className={`btn fw-bold me-3 ${activeButton === 'all' ? 'border-bottom' : null}`} name='all' onClick={(e) => handleButtonName(e)}>ALL</button>
                        <button type="button" className={`btn fw-bold me-3 ${activeButton === 'web' ? 'border-bottom' : null}`} name='web' onClick={(e) => handleButtonName(e)}>WEB </button>
                        <button type="button" className={`btn fw-bold me-3 ${activeButton === 'react' ? 'border-bottom' : null}`} name='react' onClick={(e) => handleButtonName(e)}>REACT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;