import { useEffect, useState } from "react"
import { BooksDetails } from "./BooksDetails"
import { BooksForm } from "./BooksForm"

const Books = () => {
    const localHost = 'http://localhost:3030'

    const [state, setState] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(`${localHost}/livros`,{
                headers: {
                    'Content-Type': 'application/json'  
                  }
            });
            const json = await response.json()
            if(response.ok){
                setIsLoaded(true)
                setState(json)
            }
        }
        fetchBooks()


    })

    if (!isLoaded) return (<div>
    <h1> Please wait some time.... </h1> </div>) ;

    return(
    <div className = "Books">
        <BooksForm/>
        {state && state.map((book) => <BooksDetails key={book._id} book={book}/>)} 
    </div>
    )
}

export {Books}