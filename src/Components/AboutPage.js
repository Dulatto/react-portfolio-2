import React from 'react';
import about from '../img/about.jpg'

function AboutPage(props) {
    return (
        <div className="row about-page p-5 justify-content-between">
            <div className="col-md-4">
                <div className="div-img-bg my-5 me-5">
                    <div className="about-img">
                        <img src={about} width='300' height='250' className="img-responsive" />
                    </div>
                </div>
                <div className="social">
                    <ul>
                        <li className='d-inline me-3'><a href="https://www.linkedin.com/in/dulat-omarov/"><i className="fab fa-linkedin"></i></a></li>
                        <li className='d-inline'><a href="https://github.com/Dulatto"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-8 skills">
                <h4 className="fw-bold skills-header">Hello World!</h4>
                <p> My name is Dulat. I am a Front-end Developer, graduating of Web technology program in John Abbott college. I have 3 years commercial experience providing front-end development, producing high quality responsive websites and exceptional user experience.<br />
                    I like to code things from scratch, and enjoy bringing ideas to life in the browser.<br /> By day I'm the developer at a local agency. By night I spend my time working on freelance projects and building my own products.<br />
                    All my skills you can see in right side for Desktop version or in following section for mobile.</p>
                <figure>
                    <h4 className="fw-bold skills-header">Skills</h4>
                    <div className="row">
                        <div className="col-4">
                            <div className="box"><span >Javascript</span></div>
                            <div className="box"><span >React.js</span></div>
                            <div className="box"><span >HTML5/CSS3</span></div>
                            <div className="box"><span >JQuery</span></div>
                            <div className="box"><span >TypeScript</span></div>
                            <div className="box"><span >Bootstrap 5</span></div>
                            <div className="box"><span >Webpack, NPM</span></div>
                            <div className="box"><span >RESTful API</span></div>
                            <div className="box"><span >MUI</span></div>
                            <div className="box"><span >Git</span></div>
                            <div className="box"><span >JEST</span></div>
                            <div className="box"><span >Agile/Scrum</span></div>
                        </div>
                        <div className="col-6">
                            <div className="box"><span >Responsive and Mobile Design</span></div>
                            <div className="box"><span >Cross-Browser Development</span></div>
                            <div className="box"><span >Browser Debugging</span></div>
                        </div>

                        <div className="box"><button className="btn btn-default btn-md"><a href="../doc/CV_Dulat_Omarov_2022.pdf" ><b> Download CV</b></a></button></div>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default AboutPage;