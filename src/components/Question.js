import Answer from "./Answer";
import FinishPage from "./FinishPage";
import turn from "../assets/turn.png";
import { useState } from "react";

const deck = [
        {
                Q: 'O que é JSX?',
                A: 'Uma extensão de linguagem do JavaScript',
                number: 1,
        },
        {
                Q: 'O React é __',
                A: 'uma biblioteca JavaScript para construção de interfaces',
                number: 2,
        },
        {
                Q: 'Componentes devem iniciar com __',
                A: 'letra maiúscula',
                number: 3,
        },
        {
                Q: 'Podemos colocar __ dentro do JSX',
                A: 'expressões',
                number: 4,
        },
        {
                Q: 'O ReactDOM nos ajuda __',
                A: 'interagindo com a DOM para colocar componentes React na mesma',
                number: 5,
        },
        {
                Q: 'Usamos o npm para __',
                A: 'gerenciar os pacotes necessários e suas dependências',
                number: 6,
        },
        {
                Q: 'Usamos props para __',
                A: 'passar diferentes informações para componentes',
                number: 7,
        },
        {
                Q: 'Usamos estado(state) para __',
                A: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
                number: 8,
        }
];


let answerCounter = {
        neutral: 0,
        incorret: 0,
        effort: 0,
        zap: 0
}

export default function Question({ answer, cardNumber }) {
        const [virar, setVirar] = useState(false);

        if (virar === true) {
                return <Answer card={deck[cardNumber]} deckLength={deck.length} />
        }

        answerCounterUpdater(answer);

        if (cardNumber === deck.length) {
                return <FinishPage>{answerCounter}</FinishPage>
        }

        return (
                <div className="flashcard" data-identifier="flashcard">
                        <div className="contador" data-identifier="counter">{`${deck[cardNumber].number}/${deck.length}`} </div>
                        <div className="pergunta">
                                <h1>{deck[cardNumber].Q}</h1>
                                <img src={turn} alt="turn" className="turn" onClick={() => setVirar(true)
                                } data-identifier="arrow" />
                        </div>
                </div>
        );
}

function answerCounterUpdater(answer) {
        switch (answer) {
                case 'neutro':
                        answerCounter.neutral += 1;
                        break;
                case 'incorreto':
                        answerCounter.incorret += 1;
                        break;
                case 'esforco':
                        answerCounter.effort += 1;
                        break;
                case 'zap':
                        answerCounter.zap += 1;
                        break;
                default:
                        break;
        }
}