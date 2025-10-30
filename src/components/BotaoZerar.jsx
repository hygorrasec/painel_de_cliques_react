function BotaoZerar({ onZerar, disabled }) {
    return (
        <button className="btn secundario" onClick={onZerar} disabled={disabled}>
            Zerar
        </button>
    );
}

export default BotaoZerar;
