import jumboImg from "../assets/jumbotron.webp";
import angry from "../assets/angry.png"
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const BonusUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (
    <main className="container">
      <h3 className="text-center">hai inserito un link non valido o corrotto</h3>
      
    <div id="jumbotron">
      <img className="jumbotron" src={angry} alt="angry" />
      </div>
      <h3 className="text-center">Il sommo Freezer non è contento!</h3>
      <div className="d-flex justify-content-between">
      <button className="col-2 btn btn-primary btn-sm " onClick={() => (navigate(-1))} role="button"> <i className="bi bi-caret-left-fill"></i>Torna indietro</button>
      <a className="col-2 btn btn-primary btn-sm " href={BonusUrl} role="button"> Voglio continuare <i className="bi bi-caret-right-fill"></i> </a>
      </div>
    </main>
  );
}
