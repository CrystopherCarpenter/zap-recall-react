import logoMini from "../assets/logo-mini.png";
import turn from "../assets/turn.png";
import { useState } from "react";
import PaginaFinalizacao from "./PaginaFinalizacao";

const cards = [
        {
                Q: 'O que é JSX?',
                R: 'Uma extensão de linguagem do JavaScript',
                numero: 1
        },
        {
                Q: 'O React é __',
                R: 'uma biblioteca JavaScript para construção de interfaces',
                numero: 2
        },
        {
                Q: 'Componentes devem iniciar com __',
                R: 'letra maiúscula',
                numero: 3
        },
        {
                Q: 'Podemos colocar __ dentro do JSX',
                R: 'expressões',
                numero: 4
        },
        {
                Q: 'O ReactDOM nos ajuda __', 
                R: 'interagindo com a DOM para colocar componentes React na mesma',
                numero: 5
        },
        {
                Q: 'Usamos o npm para __',
                R: 'gerenciar os pacotes necessários e suas dependências',
                numero: 6
        },
        {
                Q: 'Usamos props para __',
                R: 'passar diferentes informações para componentes',
                numero: 7
        },
        {
                Q: 'Usamos estado(state) para __', 
                R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
                numero: 8
        }
];

let neutro = 0;
let incorreto = 0;
let esforco = 0;
let zap = 0;

export default function PaginaFlashcard() {
        const [card, setCard] = useState(0);
        const [virar, setVirar] = useState(false);
        const [resposta, setResposta] = useState('');
        
        if (card === cards.length) {
                return (
                        <PaginaFinalizacao>{[neutro, incorreto, esforco, zap]}</PaginaFinalizacao>
           );
        }

        return (
                <div className="pagina-flashcard">
                        <img className="logo-mini" src={logoMini} alt="logo"/>
                        <div className={`flashcard ${resposta}`} >
                                <div className="contador">{cards[card].numero}{"/"}{cards.length}</div>
                                <div className={virar === false ? "pergunta" : "esconder"}>
                                        <h1>{cards[card].Q}</h1>
                                        <div className={virar === false ? "turn" : "esconder"}>
                                                <img src={turn} alt="turn" className="turn" onClick={() => setVirar(true)} />
                                        </div>                                
                                </div>
                                <div className={virar === true ? "resposta" : "esconder"}>
                                        <h2>{cards[card].Q}</h2>
                                        <p>{cards[card].R}</p>
                                        <div className={resposta === '' ? "botoes" : "esconder"}>
                                                <button className="neutro" onClick={() => {
                                                        setResposta('neutro');
                                                        neutro = neutro + 1;
                                                }}>Aprendi<br/>agora</button>
                                                <button className="incorreto" onClick={()=> {
                                                        setResposta('incorreto');
                                                        incorreto = incorreto + 1;
                                                }}>Não<br/>lembrei</button>
                                                <button className="esforco" onClick={()=>{
                                                        setResposta('esforco');
                                                        esforco = esforco +1;
                                                }}>Lembrei<br/>com<br/>esforço</button>
                                                <button className="zap" onClick={() => {
                                                        setResposta('zap');
                                                        zap = zap + 1;
                                                        }}><strong>Zap!</strong></button>
                                        </div>
                                        <div className={resposta !== '' ? "turn" : "esconder"}>
                                                <img src={turn} alt="turn" className="turn" onClick={() => {
                                                setCard(card + 1);
                                                setResposta('');
                                                setVirar(false);
                                                }} />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}