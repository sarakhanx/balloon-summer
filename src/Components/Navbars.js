import './Navbars.css';
import Logo from '../data/asset/Logo.png';
import {Link} from 'react-router-dom'

function Navbars() {
    return (

            <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                            <img width="80" height="auto" className="d-inline-block align-text-top" src={Logo} alt="logo"/>
                            </a>
                        </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav me-auto">
                    <a className="nav-link" href="/">PRODUCT</a>
                    <Link className="nav-link" to="/gallery">GALLERY</Link>
                    <a className="nav-link" href="/">Contact</a>
                </div>
                </div>
            </div>
        </nav>
        </div>
    )
  }

  export default Navbars;