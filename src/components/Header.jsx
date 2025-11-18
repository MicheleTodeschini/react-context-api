import { Link } from 'react-router-dom'
import { useState } from 'react'
import BudgetContext from '../contexts/BudgetContext'
import { useContext } from 'react'

export default function Header() {

    const {budgetMode, setBudgetMode} = useContext(BudgetContext)

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
     <li className="nav-item ">
        <button type="button" className="btn btn-success" onClick={() => setBudgetMode(!budgetMode)} >  { budgetMode ? "Disattiva Modalità Budget"  : "Attiva Modalità Budget" }</button>
     </li>
   
        </ul>
</>

    )
}