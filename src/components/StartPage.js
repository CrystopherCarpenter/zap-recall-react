import FlashcardPage from "./FlashcardPage";
import logo from "../assets/logo.png";
import next from "../assets/next.png";
import { useState } from "react";

export default function StartPage() {
        const [pagina, setPagina] = useState(false)

        if (pagina === true) {
                return <FlashcardPage />
        }

        return (
                <div className="start-page">
                        <div>
                                <img className="logo" src={logo} alt="logo" />
                                <button className="start" onClick={() => setPagina(true)} data-identifier="start-zap-recall">Praticar React <img src={next} alt="next" /></button>
                        </div>
                </div>

        );
}