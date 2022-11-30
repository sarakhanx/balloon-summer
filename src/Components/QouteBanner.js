import './Navbars.css'
import Cards from './Cards';
import elements from '../data/data';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function QouteBanner() {
    const cardEle = elements.map((element,product)=>{
        return <Cards key={product} element={element}/>;
      })


    useEffect(() => {
        AOS.init({data_aos_once:false});
      }, [])
    return (
        <>
        <div
        data-aos="fade-up"
        className='container-fl row qoutebanner pt-2 mt-1'>
            <h1 
            data-aos="fade-up"
            data-aos-duration="1000"
            className='text-center mt-2'>HAPPINESS IS IN THE AIR</h1>
            <p 
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"> happy birthday happy valentine happy anything i will wrote on here</p>
            <div className='row'>
            {cardEle}
            </div>
            <div 
          data-aos="fade-up"
          data-aos-duration="500"
          className='container text-center p-2 mt-2 services'>
            <h1 
            data-aos="fade-up"
            data-aos-duration="1000"
            className='pt-2'>บริการส่งด่วน ภายใน1ชม.</h1>
            <p className=''
            > lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum<br/>
            lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum <br/>
            lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem </p>
            <button 
            data-aos="fade-up"
            className='btn btn-light servicesbtn rounded-pill'>จองคิว CLICK!! เลย</button>
            </div>
        </div>
        
        </>
    )
}

export default QouteBanner;