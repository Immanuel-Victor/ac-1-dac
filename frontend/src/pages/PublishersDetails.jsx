import { Link } from 'react-router-dom'
import './publishers.css'

const PublishersDetails = ({ publisher }) => {
    const search = `?id=${publisher.id}&localDeOrigem=${publisher.localDeOrigem}&nomeFantasia=${publisher.nomeFantasia}`
  
    return (
        <div className="publisher-details">
          <h3>Local de Origem: {publisher.localDeOrigem}</h3>
          <p>Nome Fantasia: {publisher.nomeFantasia}</p>
          <Link to={{pathname:'/editarEditora', search }} >editar</Link>
        </div>
    )
}

export { PublishersDetails }