import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Hilight(props) {
    useEffect(() => {
        AOS.init({data_aos_once:false},
          {data_aos_duration:"3000"}
          );
      }, [])

    const {data} = props
    return(
        <>
        <div className="mt-1">
        <div
        data-aos="fade-up"
        className="card ">
        <img src={data.imagebanner} className="card-img rounded" alt="slide"/>
    <div 
    data-aos="fade-up"
    class="card-img-overlay bd-highlight text-start">
        <div className='undertext p-2'>
        <h5 className="card-title text-light">{data.title}</h5>
        <p className="card-text text-light">{data.update}</p>
        </div>
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