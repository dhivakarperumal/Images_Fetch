import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import NavBars from './FetchApi/NavBar';
import ImagesSlider from './FetchApi/ImagesSlider';


function App() {
  return (
    <>
       <NavBars/>
       <ImagesSlider/>
       <Footer/>
    </>
  );
}

export default App;
