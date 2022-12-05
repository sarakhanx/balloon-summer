import Navbars from "./Navbars";
import Logo from '../data/asset/Logo.png';


function Faq(){

    return(
        <>
        <Navbars/>
        <div className="">
        <div className="col text-center faqheader mt-1 pb-5">
            <h1 className="text-center">KEEP IN TOUCH</h1>
            <img width="200" height="auto" src={Logo} className='' alt="logofooter"/>
            <div className="container pt-2"><h3>FOLLOW US</h3>
            <ul className="navbar justify-content-center ps-0">
            <a href='https://www.facebook.com/Balloonsummerpattaya' className="creditsfooter p-1"><i class="fa-brands fa-square-facebook fa-xl"></i></a>
            <a href='https://www.instagram.com/balloonsummer_pattaya/' className="creditsfooter p-1"><i class="fa-brands fa-square-instagram fa-xl"></i></a>
            <a href='https://lin.ee/e6yFjcC' className="creditsfooter p-1"><i class="fa-brands fa-line fa-xl"></i></a>
            </ul></div>
            
        <div className="container ratio ratio-16x9 text-center">
        <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583662402317!2d100.89908138515158!3d12.934459054831333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310295efff16e8a7%3A0x1735a4623e0c34b3!2z4Lij4LmJ4Liy4LiZ4Lil4Li54LiB4LmC4Lib4LmI4LiHIOC4nuC4seC4l-C4ouC4siBCYWxsb29uIFBhdHRheWEgU3VtbWVy!5e0!3m2!1sth!2sth!4v1669973204923!5m2!1sth!2sth" width="400" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div></div></div>
        </>
    )
}
export default Faq;