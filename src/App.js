// import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import Header from './Components/Header';
import bannerdatas from './data/asset/BannerDatas';
import Footer from './Components/Footer';
import QouteBanner from './Components/QouteBanner';
import Hilight from './Components/Hilights';
import Review from './Components/Reviews';








function App() {


const bannerdata = bannerdatas.map((data,banner)=>{
  return <Hilight key={banner} data={data}/>;
})


  return (
    <>
    <Navbars/>
    <div className='container fluid'>
      <Header/>
      <div className="container">
      <QouteBanner/>
      </div>
      <div className='container p-0'>{bannerdata}</div>
      <Review/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
