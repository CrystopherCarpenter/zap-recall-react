import Question from "../Question/index";
import logoMini from "../../assets/logo-mini.png";
import "./style.css";

export default function FlashcardPage() {

        return (
                <div className="flashcard-page">
                        <img className="logo-mini" src={logoMini} alt="logo" />
                        <Question answer={``} cardNumber={0} />
                </div>
        );
}