import { useState } from "react";

const BooksForm = () => {

    const localHost = 'http://localhost:3030'
    const [titulo, setTitulo] = useState()
    const [dataDeLancamento, setDataLancamento] = useState()
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const livro = { titulo, dataDeLancamento };
        const response = await fetch(`${localHost}/livros`, {
            method: "POST",
            body: JSON.stringify(livro),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setError(null);
            setTitulo("");
            setDataLancamento("");
            console.log('Livro adicionado com sucesso', json)
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Adicionar Livro</h3>
            <label>Titulo</label>
            <input
                type="text"
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo}
            />
            <label>Data Lancamento</label>
            <input
                type="text"
                onChange={(e) => setDataLancamento(e.target.value)}
                value={dataDeLancamento}
            />
            <button type="submit">Enviar</button>
            {error && <div className="erro">{error}</div>}
        </form>
    );
}

export { BooksForm }