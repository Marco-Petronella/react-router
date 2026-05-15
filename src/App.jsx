/*
Consegna

Creiamo il frontend del nostro mini e-commerce e le sue pagine principali!
Useremo Fake Store API come backend fittizio per simulare i dati dei prodotti.

https://fakestoreapi.com/

Obiettivi

Installiamo React Router DOM: npm i react-router-dom
Creiamo almeno 3 pagine principali:
Homepage (con un messaggio di benvenuto o immagine promozionale)
Chi siamo
Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da 
https://fakestoreapi.com/products)
Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse

Bonus

Centralizziamo la Navbar usando un componente Layout
Gestiamo la classe active per i link attivi nella Navbar
*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Products from "./pages/Products.jsx";
import DefaultLayout from "./assets/DefaultLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={DefaultLayout()}>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
