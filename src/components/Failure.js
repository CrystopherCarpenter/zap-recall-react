import sad from "../assets/sad.png";

export default function Failure() {
        return (
                <div className="failure">
                        <div><h1>Putz...</h1><img src={sad} alt="sad" /></div>
                        <p>Você esqueceu alguns flashcards..</p>
                        <p>Não desanime! Na próxima você consegue!</p>
                </div>
        );
}