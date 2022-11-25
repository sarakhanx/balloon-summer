import './Navbars.css'



function Cards(props){
    const {element} = props
    return(
        <div className="card card-prod border-white row row-col-3 mb-1 mt-3">

    <img src={element.image} className="card-img-top mt-3" alt="cardpicture"/>
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