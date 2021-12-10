import "./assets/style.css";
import PaginaInicial from "./components/PaginaInicial";import logo from "./assets/logo.png";
import next from "./assets/next.png";
import { useState } from "react";   
import PaginaFlashcard from "./components/PaginaFlashcard";
        
export default function App() {
  const [pagina, setPagina] = useState(<PaginaFlashcard/>);

        return (
          <>
            {pagina}
          </>
        );
}