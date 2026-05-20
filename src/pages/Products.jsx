import { useState } from "react";
import { useEffect } from "react";

export default function Products() {
/*
Nella pagina Prodotti, ogni prodotto deve essere cliccabile (usa <Link>)
Aggiungiamo la pagina di dettaglio per ogni prodotto, con le informazioni prese da
 https://fakestoreapi.com/products/:id
Configuriamo il routing dinamico per leggere l’id del prodotto dalla URL

Bonus

Aggiungiamo una navigazione programmatica che riporti alla pagina di listato se viene cercato un prodotto che non esiste;
Aggiungiamo una pagina 404;
Aggiungiamo un loading per caricamento del dettaglio prodotto.

Super Bonus

Aggiungiamo nella pagina di dettaglio dei pulsanti per navigare al prodotto precedente o successivo 
(usando useNavigate() programmaticamente) */


const apiUrl = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
            setProducts(result)
            setLoading(false)
        })
    }, [])
    return(
        <>
        <h1 className="text-center">Il nostro Team: </h1>
        <ul className="row g-2">
            { loading ? (<h1>STO CARICANDO!!!</h1>)
        : ( products.map((product) => (
            <div key={product.id} className="card text-bg-primary col-6 col-md-4 col-lg-3 p-2">
              <img src={product.image} className="card-img-top object-fit-fill" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted ">{product.category}</h6>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
        ))
        )}    
        </ul>
        </>
    )
}