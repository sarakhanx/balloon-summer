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
            <h3 
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"> ร้านลูกโป่งพัทยา Balloon Summer Pattaya</h3>
            <br/>
            <br/>
            <br/>
            <p 
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center">ให้บริการสินค้าประเภทลูกโป่งอัด Helium Gas , ช่อดอกไม้สดนำเข้า , ตุ้กตาหมี Jumbo size<br/>
            Backdrop ลูกโป่ง , ดอกไม้ โต๊ะขนม ด้วยทีมงานมืออาชีพ
            </p>
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
            className='pt-2'>เช็คคิวจัดส่ง & จองคิวจัดส่งลูกโป่ง</h1>
            <h3 
            data-aos="fade-up"
            data-aos-duration="1000"
            className=''>ส่งด่วนใน 2 ชั่วโมง อีกระดับของการบริการ
            </h3>
            <br/>
            <br/>
            <p className=''
            data-aos="fade-up"
            data-aos-duration="1000"
            > บริการจัดส่งทั่วพื้นที่พัทยา บางแสน ชลบุรี ไม่จำเป็นต้องซื้อขั้นต่ำ คิดค่าจัดส่งตามระยะทาง ปรึกษาฟรี !</p>
            <a href='https://lin.ee/e6yFjcC' target='blank'>
              
            <br/>
            <br/>
            <button 
            data-aos="fade-up"
            className='btn btn-light servicesbtn rounded-pill'>คลิกเพื่อจองคิว</button>
            </a>
            </div>
        </div>
        
        </>
    )
}

export default QouteBanner;