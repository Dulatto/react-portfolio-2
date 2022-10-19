import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

function HomePage(props) {
    const el = React.useRef(null);

    const typed = React.useRef(null);
    useEffect(() => {
        const options = {
            strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],

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
            <span className='d-inline' style={{ whiteSpace: 'pre' }} ref={el} />
        </div>
    );
}

export default HomePage;