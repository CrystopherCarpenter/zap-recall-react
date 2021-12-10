import "./assets/style.css";
import PaginaInicial from "./components/PaginaInicial";import logo from "./assets/logo.png";
import { useState } from "react";   
        
export default function App() {
  const [pagina] = useState(<PaginaInicial/>);

        return (
          <>
            {pagina}
          </>
        );
}