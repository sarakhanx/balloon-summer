// import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import Header from './Components/Header';
import Cards from './Components/Cards';
import elements from './data/data';
import Footer from './Components/Footer';
import QouteBanner from './Components/QouteBanner';





function App() {
  const elementComponent = elements.map((element,product)=>{
    return <Cards key={product} element={element}/>;
  })
  
  return (
    <>
    <div className='body fluid'>
      <Navbars/>
      <Header/>
      <QouteBanner/>
          <div className="container row justify-content-sm-center">
            {elementComponent}
            </div>
          <div className='container mb-2 borderline'></div>
          <div className='container text-center mb-2'>
            <h1>บริการส่งด่วน ภายใน1ชม.</h1>
            <p className='text-secondary'> lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum</p>
            <div className="d-grid gap-2">
            <button className='btn servicesbtn rounded-pill'>จองคิว CLICK!! เลย</button>
            </div>
          
        </div>
        
    </div>
    <Footer/>
    </>
  );
}

export default App;
