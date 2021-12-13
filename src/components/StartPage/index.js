import FlashcardPage from "../FlashcardPage/index";
import logo from "../../assets/logo.png";
import next from "../../assets/next.png";
import { useState } from "react";
import "./style.css";

export default function StartPage() {
        const [pageChange, setPageChange] = useState(false)

        if (pageChange === true) {
                return <FlashcardPage />
        }

        return (
                <div className="start-page">
                        <div>
                                <img className="logo" src={logo} alt="logo" />
                                <button className="start" onClick={() => setPageChange(true)} data-identifier="start-zap-recall">Praticar React <img src={next} alt="next" /></button>
                        </div>
                </div>

        );
}