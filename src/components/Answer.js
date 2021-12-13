import Question from "./Question";
import turn from "../assets/turn.png";
import { useState } from "react";

export default function Answer({ card, deckLength }) {
        const [flip, setFlip] = useState(false);
        const [answer, setAnswer] = useState('');

        if (flip === true) {
                return <Question answer={answer} cardNumber={card.number} />
        }

        return (
                <div className={`flashcard ${answer}`} data-identifier="flashcard">
                        <div className="counter" data-identifier="counter">{`${card.number}/${deckLength}`} </div>
                        <div className="answer">
                                <h2>{card.Q}</h2>
                                <p>{card.A}</p>
                                <div className={answer === '' ? "buttons" : "hide"}>
                                        <button className="neutral" onClick={() => {
                                                setAnswer('neutral');
                                        }}>Aprendi agora</button>
                                        <button className="incorrect" onClick={() => {
                                                setAnswer('incorrect');
                                        }}>Não lembrei</button>
                                        <button className="effort" onClick={() => {
                                                setAnswer('effort');
                                        }}>Lembrei com esforço</button>
                                        <button className="zap" onClick={() => {
                                                setAnswer('zap');
                                        }}><strong>Zap!</strong></button>
                                </div>
                                <img src={turn} alt="turn" className={answer !== '' ? "turn" : "hide"} onClick={() => {
                                        setFlip(true);
                                }} data-identifier="arrow" />
                        </div>
                </div>
        );
}