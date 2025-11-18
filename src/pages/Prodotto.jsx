import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Prodotto() {

    const { id } = useParams();
    const urlProdotto = `https://fakestoreapi.com/products/${id}`
    
    const [prodotto, setProdotto] = useState({})
    
    
        
    
    
    
    useEffect(() => {

        axios
        .get(urlProdotto)
        .then(res =>
            setProdotto(res.data))
        
           
    }, [id]);


    return(
        <>
        <h1> Vedo prodotto con id {prodotto.id} </h1>
        <Header/>
            <div>
                 <div key={prodotto.id} className='col-4 card py-3'>
                <div className='card-top'>
                    <img src={prodotto.image} alt={prodotto.title} />
                </div>
                <div className='card-bottom'>
                    <h3>{prodotto.title}</h3>
                    <p><strong>{prodotto.price}€</strong></p>
                    <p className='description'>{prodotto.description}</p>
                    <Link to={`/Prodotti`}>Torna alla lista prodotti</Link>
                </div>
            </div>
            </div>

             <Footer/>
        </>
    )



}