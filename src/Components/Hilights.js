import '../App.css'
function Hilight(props) {

    const {element} = props
    return(
        <>
        <div className="mt-1">
        <div className="card ">
        <img src={element.imagebanner} className="card-img rounded" alt="slide"/>
    <div class="card-img-overlay bd-highlight text-start">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text">{element.update}</p>
        </div>
</div>
        
      </div>


      {/* <div class="card bg-dark text-white">
  <img src="..." class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div> */}

        </>
    )
}

export default Hilight;