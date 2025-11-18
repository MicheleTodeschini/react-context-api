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
     </ul>

</>

    )
}