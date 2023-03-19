import { useEffect, useState } from "react"
import { BooksDetails } from "./BooksDetails"
import { BooksForm } from "./BooksForm"

const Books = () => {
    const localHost = 'http://localhost:3030'

    const [state, setState] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(`${localHost}/livros`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json()
            if (response.ok) {
                setIsLoaded(true)
                setState(json)
            }
        }
        fetchBooks()
    })

    if (!isLoaded) return (<div>
        <h1> Please wait some time.... </h1> </div>);

    return (
        <div className="Books">
            <BooksForm />
            <label>Buscar Livro</label>
            <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
            {state && state.filter(book => {
                if (query === "") {
                    //if query is empty
                    return book;
                } else if (book.titulo.toLowerCase().includes(query.toLowerCase())) {
                    //returns filtered array
                    return book;
                }
            }).map((book) => <BooksDetails key={book.id} book={book} />)}
        </div>
    )
}

export { Books }