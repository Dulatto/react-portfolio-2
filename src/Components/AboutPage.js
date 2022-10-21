import React from 'react';

function AboutPage(props) {
    return (
        <div className="row">
            <div className="col-md-6">
                <h2>About Me</h2>
                <div className="section-title">
                    <div className="row"> <img src="img/about.jpg" className="img-responsive pull-left" alt="" />
                        <p>Hello World! <br />My name is Dulat. I am a Front-end Developer, graduating of Web technology program in John Abbott college. I have 3 years commercial experience providing front-end development, producing high quality responsive websites and exceptional user experience.<br />
                            I like to code things from scratch, and enjoy bringing ideas to life in the browser.<br /> By day I'm the developer at a local agency. By night I spend my time working on freelance projects and building my own products.<br />
                            All my skills you can see in right side for Desktop version or in following section for mobile.</p>
                        <div className="social">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/dulat-omarov/"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://www.facebook.com/dulat.omarov.3"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://github.com/Dulatto"><i className="fab fa-github"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h2>My Skills</h2>
                <figure>
                    <div className="skills ">
                        <div className="box"><span >  &nbsp;</span></div>
                        <div className="box"><span >HTML5/CSS3</span></div>
                        <div className="box"><span >Javascript</span></div>
                        <div className="box"><span >React.js</span></div>
                        <div className="box"><span >JQuery</span></div>
                        <div className="box"><span >SQL</span></div>
                        <div className="box"><span >Bootstrap</span></div>
                        <div className="box"><span >WordPress</span></div>
                        <div className="box"><span >Github</span></div>
                        <div className="box"><button className="btn btn-default btn-md"><a href="CV_Dulat_Omarov_2022.pdf" ><b> Download CV</b></a></button></div>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default AboutPage;