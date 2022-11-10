// import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import Header from './Components/Header';
import Cards from './Components/Cards';
import elements from './data/data';
import ContentComponent from './Components/ContentComponent.js';



function App() {
  const elementComponent = elements.map((element,product)=>{
    return <Cards key={product} element={element}/>;
  })
  
  return (
    
    <div className='body'>
      <Navbars/>
      <Header/>
          <div class="container row justify-content-sm-center mt-3">
          <figure class="text-center">
              <blockquote class="blockquote">
                <p>HAPPINESS IS IN THE AIR.</p>
              </blockquote>
              <figcaption class="blockquote-footer">เมนูแนะนำ</figcaption>
            </figure>
            {elementComponent}
          <div className='container mb-2 borderline'></div>
          <p>lorem</p>
          <img src="https://drive.google.com/uc?export=view&id=1e3wxcrog61Btq-OmmBwJb-w6jAdRPMSQ" alt="drive image"/>
          <h1 className='text.primary'>ลอง push GitHub ดูอีกที</h1>
          <img src="https://drive.google.com/uc?export=view&id=1dwH3sA1IFgP5nGAVrb2cz2xOQ1SMfcZb" alt="drive image"/>
        </div>
    </div>
  );
}

export default App;
