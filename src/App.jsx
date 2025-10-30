import { useState } from "react";
import Contador from "./components/Contador";
import BotaoAdicionar from "./components/BotaoAdicionar";
import BotaoZerar from "./components/BotaoZerar";
import Mensagem from "./components/Mensagem";
import "./index.css";


function App() {
    const [cliques, setCliques] = useState(0);

    // Usa a forma "callback" para sempre somar a partir do valor mais recente
    const adicionarClique = () => setCliques((prev) => prev + 1);
    const zerarCliques = () => setCliques(0);

    return (
        <main className="painel">
            <h1>Painel de Cliques</h1>

            <Contador total={cliques} />

            <div className="acoes">
                <BotaoAdicionar onAdicionar={adicionarClique} />
                <BotaoZerar onZerar={zerarCliques} disabled={cliques === 0} />
            </div>

            <Mensagem
                condicao={cliques >= 10}
                textoOk="Parabéns! Você alcançou 10 cliques!"
                textoDefault="Continue clicando para chegar a 10!"
            />
        </main>
    );
}

export default App;
