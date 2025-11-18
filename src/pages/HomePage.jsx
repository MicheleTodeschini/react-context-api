import { Link } from 'react-router-dom'
import Magliette from '../img/magliette.jpg'
import Zaini from '../img/Zaini.jpg'
import Gioielli from '../img/gioielli.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function HomePage() {

    return(
        <>
            <h1>Benvenuto nel nostro nuovo shop!</h1>

            <Header/>
 
        <div className="jumbotron jumbotron-fluid">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Magliette} className="d-block w-100" alt="magliette"/>
    </div>
    <div className="carousel-item">
      <img src={Zaini} className="d-block w-100" alt="zaini"/>
    </div>
    <div className="carousel-item">
      <img src={Gioielli} className="d-block w-100" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>


        <Footer/>
        </>
    )


}