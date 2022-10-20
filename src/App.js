
import './App.css';
import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 bg-light pt-2">
            <ul className="nav nav-pills float-end mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">About</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-portfolio-tab" data-bs-toggle="pill" data-bs-target="#pills-portfolio" type="button" role="tab" aria-controls="pills-portfolio" aria-selected="false">Portfolio</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contacts</button>
              </li>
            </ul>
          </div>
          <div className="col-12 p-0">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show home-page active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <HomePage />
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><AboutPage /></div>
              <div className="tab-pane fade" id="pills-portfolio" role="tabpanel" aria-labelledby="pills-portfolio-tab">33333</div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">4444</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
