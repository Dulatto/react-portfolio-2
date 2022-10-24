import React from 'react';

function PortfolioPage(props) {
    return (
        <div>
            <h4>MY PORTFOLIO</h4>
            <div className="row">
                <div className="col-12 position-relative">
                    <div className="position-absolute start-50" >
                        <button type="button" className="btn btn-danger me-3 ">ALL</button>
                        <button type="button" className="btn btn-warning me-3">WEB </button>
                        <button type="button" className="btn btn-success">REACT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;