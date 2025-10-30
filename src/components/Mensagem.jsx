function Mensagem({ condicao, textoOk, textoDefault }) {
    return (
        <p className={`mensagem ${condicao ? "ok" : "neutra"}`}>
            {condicao ? textoOk : textoDefault}
        </p>
    );
}

export default Mensagem;
