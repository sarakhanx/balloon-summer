import './Navbars.css';
import Logo from '../data/asset/Logo.png';

function Navbars() {
    return (

    
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                            <img width="80" height="auto" class="d-inline-block align-text-top" src={Logo} alt="logo"/>
                            </a>
                        </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav me-auto">
                    <a className="nav-link" href="/">PRODUCT</a>
                    <a className="nav-link" href="/">GALLERY</a>
                    <a className="nav-link" href="/">Contact</a>
                </div>
                </div>
            </div>
        </nav>
    )
  }

  export default Navbars;