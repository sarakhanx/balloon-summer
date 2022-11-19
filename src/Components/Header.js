import '../Components/Header.css'


function Header(){


    return (
        <div id="headerslides" className="container carousel slide" data-bs-ride="carousel">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

      <div className="carousel-item active">
        <img src="https://drive.google.com/uc?export=view&id=1ySBrzaQW05e24TC0CpPSplq64SeKVzjA" className="d-block w-100" alt="..."/>
      </div>

      <div className="carousel-item">
        <img src="https://drive.google.com/uc?export=view&id=1JUAzExOCQZ9KOpNavipSOI4Hj7RCW8G_" className="d-block w-100" alt="..."/>
      </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
    )
}

export default Header;