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
                        <div className="contador" data-identifier="counter">{`${card.number}/${deckLength}`} </div>
                        <div className="resposta">
                                <h2>{card.Q}</h2>
                                <p>{card.A}</p>
                                <div className={answer === '' ? "botoes" : "esconder"}>
                                        <button className="neutro" onClick={() => {
                                                setAnswer('neutro');
                                        }}>Aprendi agora</button>
                                        <button className="incorreto" onClick={() => {
                                                setAnswer('incorreto');
                                        }}>Não lembrei</button>
                                        <button className="esforco" onClick={() => {
                                                setAnswer('esforco');
                                        }}>Lembrei com esforço</button>
                                        <button className="zap" onClick={() => {
                                                setAnswer('zap');
                                        }}><strong>Zap!</strong></button>
                                </div>
                                <img src={turn} alt="turn" className={answer !== '' ? "turn" : "esconder"} onClick={() => {
                                        setFlip(true);
                                }} data-identifier="arrow" />
                        </div>
                </div>
        );
}