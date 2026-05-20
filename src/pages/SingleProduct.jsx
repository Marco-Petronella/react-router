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
    if (id < "1" || id > "20" || id == NaN) { navigate("/products"); return }
    setLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProduct(result);
        setLoading(false);
      })
      .catch((err) => {
        navigate("/error");
      });
  }, [apiUrl, navigate]);
  return (
    <main className="container d-flex justify-content-around">

      {loading ? (
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
      ) : (
        <div className="card text-bg-primary col-6 p-2">
            <h2 className="text-center">{product.title}</h2>
          <img
            src={product.image}
            className="card-img-top object-fit-fill"
            alt={product.title}
          />
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted ">
              {product.category}
            </h6>
            <p>price: {product.price}€</p>
            <p className="card-text">{product.description}</p>
            <p>
              valutation: {product.rating?.rate}/5 over {product.rating?.count}{" "}
              review
            </p>
            <div className="d-flex justify-content-between">
              {product.id > 1 ? (
                <btn
                  className="col-4 btn btn-primary btn-sm "
                  onClick={() => navigate(`/singleProduct/${product.id - 1}`)}
                  role="button"
                >
                  <i class="bi bi-caret-left-fill"></i> Show previous
                </btn>
              ) : ( null )}
              {product.id < 20 ? (
                <btn
                  className="col-4 btn btn-primary btn-sm "
                  onClick={() => navigate(`/singleProduct/${product.id + 1}`)}
                  role="button"
                >
                  Show next <i class="bi bi-caret-right-fill"></i>
                </btn>
              ) : ( null )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
