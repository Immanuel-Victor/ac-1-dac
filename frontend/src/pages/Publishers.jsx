import { useEffect, useState } from "react"
import { PublishersDetails } from "./PublishersDetails"
import { PublishersForm } from "./PublishersForm"

const Publishers = () => {
    const localHost = 'http://localhost:3030'

    const [state, setState] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchPublishers = async () => {
            const response = await fetch(`${localHost}/editoras`, {
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
        fetchPublishers()


    })

    if (!isLoaded) return (<div>
        <h1> Please wait some time.... </h1> </div>);

    return (
        <div className="Publishers">
            <PublishersForm />
            <label>Buscar Editora</label>
            <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
            {state && state.filter(publisher => {
                if (query === "") {
                    //if query is empty
                    return publisher;
                } else if (publisher.nomeFantasia.toLowerCase().includes(query.toLowerCase())) {
                    //returns filtered array
                    return publisher;
                }
            }).map((publisher) => <PublishersDetails key={publisher.id} publisher={publisher} />)}
        </div>
    )
}

export { Publishers }