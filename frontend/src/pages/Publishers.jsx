import { useEffect, useState } from "react"
import { PublishersDetails } from "./PublishersDetails"
import { PublishersForm } from "./PublishersForm"

const Publishers = () => {
    const localHost = 'http://localhost:3030'

    const [state, setState] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const fetchPublishers = async () => {
            const response = await fetch(`${localHost}/editoras`,{
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
        fetchPublishers()


    })

    if (!isLoaded) return (<div>
    <h1> Please wait some time.... </h1> </div>) ;

    return(
        <div className = "Publishers">
        <PublishersForm/>
        {state && state.map((publisher) => <PublishersDetails key={publisher._id} publisher={publisher}/>)} 
    </div>
    )
}

export {Publishers}