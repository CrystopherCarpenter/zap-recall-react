import sad from "../../assets/sad.png";
import next from "../../assets/next.png";
import "./style.css";

export default function Failure({ incorrect }) {
        return (
                <div className="finish">
                        <div><h1>Putz...</h1><img src={sad} alt="sad" /></div>
                        <p>Você esqueceu {incorrect} flashcards..</p>
                        <p>Não desanime! Na próxima você consegue!</p>
                        <button className="start" onClick={() => window.location.reload()} data-identifier="start-zap-recall">Tentar novamente <img src={next} alt="next" /></button>
                </div>
        );
}