import logo from "../assets/logo.png";
import next from "../assets/next.png";
import PaginaFlashcard from "./PaginaFlashcard";
import { useState } from "react";

export default function PaginaInicial() {
        const [pagina, setPagina] = useState(false)
        
        if (pagina === true) {
                return <PaginaFlashcard />
        }
       
        return(
                <div className="pagina-inicial">
                   <div>
                           <img className="logo" src={logo} alt="logo" />
                           <button className="iniciar" onClick={() => setPagina(true)}>Praticar React <img src={next} alt="next"/></button>
                   </div>
           </div>

        );
}