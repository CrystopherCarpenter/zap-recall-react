import Success from "../Success/index";
import Failure from "../Failure/index";

export default function FinishPage({ children }) {
        const [answer, deckLength] = children;
        return (answer.zap === deckLength ? <Success /> : <Failure incorrect={deckLength - answer.zap} />)
}