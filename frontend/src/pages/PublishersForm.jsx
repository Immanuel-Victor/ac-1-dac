import { useState } from "react";

const PublishersForm = () => {

    const localHost = 'http://localhost:3030'
    const [localDeOrigem, setLocalDeOrigem] = useState()
    const [nomeFantasia, setNomeFantasia] = useState()
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const livro = { localDeOrigem, nomeFantasia };
        const response = await fetch(`${localHost}/editoras`, {
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
            setLocalDeOrigem("");
            setNomeFantasia("");
            console.log('Editora adicionada com sucesso', json)
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Adicionar Editora</h3>
            <label>Local De Origem</label>
            <input
                type="text"
                onChange={(e) => setLocalDeOrigem(e.target.value)}
                value={localDeOrigem}
            />
            <label>Nome Fantasia</label>
            <input
                type="text"
                onChange={(e) => setNomeFantasia(e.target.value)}
                value={nomeFantasia}
            />
            <button type="submit">Enviar</button>
            {error && <div className="erro">{error}</div>}
        </form>
    );
}

export { PublishersForm }