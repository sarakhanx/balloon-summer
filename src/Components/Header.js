import '../Components/Header.css'
import '../data/data'


function Header(){


    return (
        <div id="headerslides" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <h5 className='text-secondary '>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#headerslides" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
          <button className="carousel-control-next" type="button" data-bs-target="#headerslides" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
             </button>
      </div>
//     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-inner">

//       <div className="carousel-item active">
//         <img src="https://i.pinimg.com/564x/ad/ad/51/adad511ab80d04e3537e2a2145b7aa6c.jpg" className="d-block w-100" alt="..."/>
//       </div>

//       <div className="carousel-item">
//         <img src="https://i.pinimg.com/564x/9d/cf/87/9dcf87d78228fe157d62c3dfc889ee85.jpg" className="d-block w-100" alt="..."/>
//       </div>

//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Next</span>
//     </button>
//   </div>
    )
}

export default Header;