import Success from "./Success";
import Failure from "./Failure";

export default function FinishPage({ children }) {
        const [answer, deckLength] = children;
        return (answer.zap === deckLength ? <Success /> : <Failure />)
}