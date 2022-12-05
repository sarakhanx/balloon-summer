import '../Components/Header.css'
import {Link} from 'react-router-dom'


function Footer(){
    return (
        <div className='fluid expand-lg'>
        <div className='footer navbar-nav p-3'>
            <div className='row p-2'>
                <div className='col-md-4 p-2'>
                    <h4 className='text-secondary'>CONTACT US</h4>
                    <li className='nav-item'><i class="fa-brands fa-facebook"></i> FACEBOOK</li>
                    <li><i class="fa-brands fa-instagram"></i> INSTAGRAM</li>
                    <li><i class="fa-solid fa-phone"></i> TEL: 082 715 5585</li>
                </div>
                
                <div className='col-md-4 p-2'>
                    <h4 className='text-secondary'>GALLERY</h4>
                        <li>Everyday Balloons</li>
                        <li>Wedding Balloons</li>
                        <li>Birthday Balloons</li>
                        <li>Kids Birthday Balloons</li>
                        <li>Hen Night Party</li>
                </div>
                <div className='col-md-4 p-2'>
                    <h4 className='text-secondary'>Q&A</h4>
                    <Link to='/questions-and-answer'><li>How Long For Float Balloons</li>
                        <li>Must Order In Advance ?</li>
                        <li>How Far Do We Delivery</li>
                        <li>What Time We Open</li>
                        <li>Hen Night Party</li></Link>
                </div>
            </div>
        </div>
        </div>
    )}
    export default Footer;