import './Navbars.css'



function Cards(props){
    const {element} = props
    return(
        <div className="card border-light row row-col-3 mb-4">
    {/* <img src="https://scontent.futp2-1.fna.fbcdn.net/v/t39.30808-6/311776049_6013088855368348_4160862019254131031_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE8Nu1yS5ejNp2UjxBESgEa4c-N3drUEy3hz43d2tQTLfzuMLwP8QJhm2U0Nq7nLd3VekmEgGLKRY4TwRkPTG9m&_nc_ohc=a0Fe8W9eJXYAX8mTJwR&_nc_oc=AQnkxtosUv-H2YPEV3cdoxJvFDeXxVgKTUf6RSoEuJdUQ34eOP-rfI9I_SNR4pKbpK7lG1R-XW3KUXoMJcDTxuKB&_nc_ht=scontent.futp2-1.fna&oh=00_AT8YE2MPr15CRbUCrpKC9K4US9NjrgoT1Vjj7gcdQkDAtg&oe=63576B38" class="card-img-top" alt="..."/> */}
    <img src={element.image} className="card-img-top fluid " alt="..."/>
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