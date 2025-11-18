import { Link } from 'react-router-dom'

export default function Header() {


    return(
<>
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
    
     <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Switcha per attivare la budget mode</label>
    </div>
        </ul>
</>

    )
}