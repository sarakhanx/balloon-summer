import './Navbars.css';
import Logo from '../data/asset/Logo.png';
import {Link} from 'react-router-dom'

function Navbars() {
    return (

            <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                        
                            <a className="navbar-brand" href="/">
                            <img width="80" height="auto" className="d-inline-block align-text-top" src={Logo} alt="logo"/>
                            </a>

                <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link text-center" to="/product">PRODUCT</Link>
                    <Link className="nav-link text-center" to="/gallery">GALLERY</Link>
                    <Link className="nav-link text-center" to="/contact">Contact</Link>
                </div>
                </div>
            </div>
        </nav>
        </div>
    )
  }

  export default Navbars;