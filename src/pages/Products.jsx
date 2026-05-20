import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Reuleaux } from "ldrs/react";
import "ldrs/react/Reuleaux.css";

export default function Products() {
/*

Bonus

Aggiungiamo una navigazione programmatica che riporti alla pagina di listato se viene cercato un prodotto che non esiste;
Aggiungiamo una pagina 404;
Aggiungiamo un loading per caricamento del dettaglio prodotto.
*/

const apiUrl = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
            setProducts(result)
            setLoading(false)
        })
    }, [])
    return(
        <main className="container">
        <h1 className="text-center">I nostri prodotti: </h1>
        <ul className="row g-2">
            { loading ? (
                    <div className="loader">
                        <Reuleaux
                            size="300"
                            stroke="5"
                            strokeLength="0.15"
                            bgOpacity="0.3"
                            speed="1.2"
                            color="black"
                        />
                    </div>
            )
        : ( products.map((product) => (
            <div key={product.id} className="card text-bg-primary col-6 col-md-4 col-lg-3 p-2">
              <img src={product.image} className="card-img-top object-fit-fill" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted ">{product.category}</h6>
                <p className="card-text">{product.description}</p>
                <Link className="btn btn-primary btn-sm " to={`/singleProduct/${product.id}`} role="button">Show Details</Link>
              </div>
            </div>
        ))
        )}    
        </ul>
        </main>
    )
}