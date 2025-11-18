import { Link } from 'react-router-dom'


export default function Footer() {

    return(
        <footer>
          <section className='footer-left'>
            <p>Contenuto <i class="bi bi-c-circle-fill"></i>copyrightsato nun te azzarda a piallo</p>
          </section>
          <section className='footer-right'>
                 <ul className='list-unstyled d-flex  gap-3'>
   <li className="nav-item">
        <Link to='/'>Home</Link>
     </li>
      <li className="nav-item ">
         <Link className="nav-link" aria-current="page" to="/ChiSiamo">Chi Siamo</Link>
     </li>
     <li className="nav-item ">
         <Link className="nav-link" aria-current="page" to="/Prodotti">Prodotti</Link>
     </li>
     </ul>
          </section>
        </footer>
    )

}