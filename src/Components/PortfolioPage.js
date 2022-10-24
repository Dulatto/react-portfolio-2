import React, { useState } from 'react';

const images = [
    { id: 1, text: 'Dating Website', description: 'HTML, JavaScript', type: 'JS', url: 'https://www.bootyfinder.com//' },
    { id: 2, text: 'Restaurant', description: 'HTML, JavaScript', type: 'JS', url: 'http://www.terredesboers.ca///' },
    { id: 3, text: 'Dating', description: 'HTML, JavaScript', type: 'JS', url: 'https://www.hookupswanted.com/' },
    { id: 4, text: 'Medical Center', description: 'HTML, JavaScript', type: 'JS', url: 'https://mediker.kz/' },
    { id: 5, text: 'Book Store', description: 'HTML, JavaScript', type: 'JS', url: 'https://bestseller.kz/' },
    { id: 6, text: 'Pet Supply Store', description: 'HTML, JavaScript', type: 'JS', url: 'http://miska.kz/' },
    { id: 7, text: 'Cafe', description: 'HTML, JavaScript', type: 'JS', url: 'http://www.falafelstjacques.com/' },
    { id: 8, text: 'Weather Widget', description: 'React, JavaScript', type: 'React', url: 'https://react-weather-widget-dulatto.vercel.app/' },
    { id: 9, text: 'ToDo List', description: 'React, JavaScript', type: 'React', url: 'https://react-todo-list-iiwqmujls.vercel.app/' },
    { id: 10, text: 'Covid Tracker', description: 'React, JavaScript', type: 'React', url: 'https://react-corona-tracker-plum.vercel.app/' },
    { id: 11, text: 'Portfolio', description: 'React, JavaScript', type: 'JS' },
    { id: 12, text: 'Shopping cart', description: 'React, Redux, JavaScript', type: 'React', url: 'https://redux-store-orpin.vercel.app/' },
    { id: 13, text: 'Timer', description: 'React, JavaScript', type: 'React', url: 'https://react-timer-dulatto.vercel.app/' },
]

function PortfolioPage(props) {
    const [activeButton, setActiveButton] = useState('all');

    const handleButtonName = (e) => {
        console.log('handleButtonName', e.target.name);
        setActiveButton(e.target.name);
    }

    return (
        <div>
            <h4>MY PORTFOLIO</h4>
            <div className="row portfolio">
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