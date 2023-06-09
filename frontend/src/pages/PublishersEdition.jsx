import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const PublishersEdition = () => {

    const localHost = 'http://localhost:3030'

    const [searchParams, setSearchParams] = useSearchParams()
    const [localDeOrigem, setLocalDeOrigem] = useState(searchParams.get('localDeOrigem'))
    const [nomeFantasia, setNomeFantasia] = useState(searchParams.get('nomeFantasia'))
    const [error, setError] = useState("")

    const id = searchParams.get('id')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const livro = { localDeOrigem, nomeFantasia };
        const response = await fetch(`${localHost}/editoras/${id}`, {
            method: "PATCH",
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
            console.log('Editora editada com sucesso', json)
        }
    }
    return (
        <div>
            <label>Local de Origem</label>
            <input value={localDeOrigem} onChange={(e) => {setLocalDeOrigem(e.target.value)}}></input>
            <label>Nome Fantasia</label>
            <input value={nomeFantasia} onChange={(e) => {setNomeFantasia(e.target.value)}}></input>
            <button onClick={handleSubmit}>Editar</button>
        </div>
    )
}

export {PublishersEdition}