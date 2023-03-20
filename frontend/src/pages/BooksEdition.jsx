import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const BooksEdition = () => {

    const localHost = 'http://localhost:3030'

    const [searchParams, setSearchParams] = useSearchParams()
    const [titulo, setTitulo] = useState(searchParams.get('titulo'))
    const [dataDeLancamento, setDataDeLancamento] = useState(searchParams.get('dataDeLancamento'))
    const [error, setError] = useState("")

    const id = searchParams.get('id')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const livro = { titulo, dataDeLancamento };
        const response = await fetch(`${localHost}/livros/${id}`, {
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
            setTitulo("");
            setDataDeLancamento("");
            console.log('Editora editada com sucesso', json)
        }
    }
    return (
        <div>
            <label>Titulo</label>
            <input value={titulo} onChange={(e) => {setTitulo(e.target.value)}}></input>
            <label>Data De Lancamento</label>
            <input value={dataDeLancamento} onChange={(e) => {setDataDeLancamento(e.target.value)}}></input>
            <button onClick={handleSubmit}>Editar</button>
        </div>
    )
}

export {BooksEdition}