import Footer from "./Footer";
import Navbars from "./Navbars";
import "./Navbars.css";

function Gallery(){
    return (
        <>
        <Navbars/>
        <div className="container">
        <h1 className='text-primary'>Hello Gallery</h1>
        </div>
        <Footer/>
        </>
    )
}

export default Gallery;