import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

function HomePage(props) {
    const el = React.useRef(null);

    const typed = React.useRef(null);
    useEffect(() => {
        const options = {
            strings: ["I'm <strong>Dulat Omarov</strong>", "I'm <strong>a web developer</strong>", "I'm <strong>a freelancer</strong>"],
            typeSpeed: 50,
            backSpeed: 50,
            fadeOut: true,
            loop: true
        };
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="home-text">
            <div className='d-inline' style={{ whiteSpace: 'pre' }} ref={el} />
            <ul className="list-unstyled list-social">
                <li className='d-inline'><a href="#"><i className="fab fa-github"></i></a></li>
                <li className='d-inline'><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
        </div>
    );
}

export default HomePage;