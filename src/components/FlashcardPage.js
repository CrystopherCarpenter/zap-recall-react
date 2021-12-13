import Question from "./Question";
import logoMini from "../assets/logo-mini.png";

export default function FlashcardPage() {

        return (
                <div className="flashcard-page">
                        <img className="logo-mini" src={logoMini} alt="logo" />
                        <Question answer={``} cardNumber={0} />
                </div>
        );
}