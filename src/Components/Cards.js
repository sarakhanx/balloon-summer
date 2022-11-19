import './Navbars.css'



function Cards(props){
    const {element} = props
    return(
        <div className="card border-light row row-col-3 mb-4">

    <img src="https://drive.google.com/uc?export=view&id=1ySBrzaQW05e24TC0CpPSplq64SeKVzjA" className="card-img-top mt-3" alt="..."/>
  <div className="card-body card-img-overlay ms-2">
      <div className="foreground">
    <h5 className="card-title title text-white ms-2">{element.title}</h5>
    <p className="card-text content text-white ms-2">{element.content}</p>
    </div>
  </div>
</div>
    ) 
}

export default Cards;