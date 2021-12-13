import party from "../../assets/party.png";
import next from "../../assets/next.png";
import "./style.css";

export default function Success() {
        return (
                <div className="finish">
                        <div><h1>PARABÉNS!</h1><img src={party} alt="party" /></div>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                        <button className="start" onClick={() => window.location.reload()} data-identifier="start-zap-recall">Tentar novamente <img src={next} alt="next" /></button>
                </div>
        );
}