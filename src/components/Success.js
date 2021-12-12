import party from "../assets/party.png";

export default function Success() {
        return (
                <div className="success">
                        <div><h1>PARABÉNS!</h1><img src={party} alt="party" /></div>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
        );
}