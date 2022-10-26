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

let list = images.map(item => {
    return (<div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
        <div className={`card hover-bg text-dark mb-2 bground-${item.id}`} key={item.id}>
            <a href={item.url} target="_blank">
                <div className="card-body">
                    <div className="hover-text">
                        <div className="overlay-caption">
                            <div className="overlay-content">
                                <h4 className="card-title">{item.text}</h4>
                                <hr />
                                <h5 className="card-text">{item.description}</h5>
                            </div>
                        </div>
                    </div >
                </div>
            </a>
        </div>
    </div>)
})

function PortfolioPage(props) {
    const [activeButton, setActiveButton] = useState('all');
    const [gallery, setGallery] = useState([list])

    const frame = (item) => {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6  portfolio-item" >
                <div className={`card hover-bg text-dark mb-2 bground-${item.id}`} key={item.id}>
                    <div className="card-body">
                        <div class="hover-text">
                            <div class="overlay-caption">
                                <div class="overlay-content">
                                    <h4 className="card-title">{item.text}</h4>
                                    <hr />
                                    <h5 className="card-text">{item.description}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >);
    }


    const handleButtonName = (e) => {
        console.log('handleButtonName', e.target.name);
        setActiveButton(e.target.name);
        if (e.target.name === 'all') {
            let list = images.map(item => {
                return (
                    frame(item)
                )
            })
            setGallery(list);
        } else if (e.target.name === 'web') {
            let list = images.filter(item => item.type === 'JS')
            let web = list.map(item => {
                return (
                    frame(item)
                )
            });
            setGallery(web);
        } else {
            let list = images.filter(item => item.type === 'React')
            let web = list.map(item => {
                return (
                    frame(item)
                )
            });
            setGallery(web);
        }
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
                <div className="col-12">
                    {gallery}
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;