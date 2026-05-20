import { Reuleaux } from "ldrs/react";
import "ldrs/react/Reuleaux.css";

// Default values shown
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const apiUrl = `https://fakestoreapi.com/products/${id}`;
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setProduct(result);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <h1 className="text-center">I nostri prodotti: </h1>
            {loading ? (
                <div className="container">
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
                </div>
            ) : (
                <div className="card text-bg-primary col-6 col-md-4 col-lg-3 p-2">
                    <img src={product.image} className="card-img-top object-fit-fill" alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted ">
                            {product.category}
                        </h6>
                        <p className="card-text">{product.description}</p>

                    </div>
                </div>
            )   
        }
        
      
    </>
    );
}
