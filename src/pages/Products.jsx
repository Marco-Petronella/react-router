import { useState } from "react";
import { useEffect } from "react";

export default function Products() {
const apiUrl = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
            setProducts(result)
        })
    }, [])
    return(
        <>
        <h1 className="text-center">Il nostro Team: </h1>
        <ul className="row g-4">
        {products.map((product) => (
            <div key={product.id} className="card col-6 col-md-4 col-lg-3 ">
              <img src={product.image} className="card-img-top object-fit-fill" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted ">{product.category}</h6>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
        ))}    
        </ul>
        </>
    )
}