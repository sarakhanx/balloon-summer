// import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import Header from './Components/Header';
import Cards from './Components/Cards';
import elements from './data/data';
import bannerdatas from './data/asset/BannerDatas';
import Footer from './Components/Footer';
import QouteBanner from './Components/QouteBanner';
import Hilight from './Components/Hilights';
import Bounce from 'react-reveal';
import Review from './Components/Reviews';







function App() {

  const elementComponent = elements.map((element,product)=>{
    return <Cards key={product} element={element}/>;
  })

const bannerdata = bannerdatas.map((element,banner)=>{
  return <Hilight key={banner} element={element}/>;
})


  return (
    <>
    <Navbars/>
    <div className='container fluid'>
      
      <Header/>
      <QouteBanner/>
          <div className="row justify-content-center">
            {elementComponent}
            </div>

          <div className='container text-center p-2 m-1 services'>
            <h1 className='pt-2'>บริการส่งด่วน ภายใน1ชม.</h1>
            <Bounce bottom ><p className=''
            > lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum<br/>
            lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum <br/>
            lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem </p></Bounce>
            <div className="d-grid">
            <button className='btn btn-light servicesbtn rounded-pill'>จองคิว CLICK!! เลย</button>
            </div>
            </div>
           
            
            <div className='container '>{bannerdata}</div>
            <Review/>
    </div>
    <Footer/>

    </>
  );
}

export default App;
