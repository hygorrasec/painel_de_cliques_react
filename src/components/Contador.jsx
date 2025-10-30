function Contador({ total }) {
    return (
        <p className="contador">
            Você clicou <strong>{total}</strong> {total === 1 ? "vez" : "vezes"}.
        </p>
    );
}

export default Contador;
