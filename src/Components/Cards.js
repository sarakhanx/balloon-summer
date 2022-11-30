import './Navbars.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
import {Link} from 'react-router-dom'



function Cards(props){
  useEffect(() => {
    AOS.init({data_aos_once:false});
  }, [])
    const {element} = props
    return(
        <div 
        data-aos="fade-up"
        className="container text-center card-prod">
  <Link to='/'>          
    <img src={element.image} className="card-img-top" alt="cardpicture"/>
    <h5 className="card-title title text-white ms-2">{element.title}</h5>
    <p className="card-text content text-white ms-2">{element.content}</p>
    </Link>
</div>
    ) 
}

export default Cards;