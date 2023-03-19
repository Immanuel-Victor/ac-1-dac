const PublishersDetails = ({ publisher }) => {
    return (
        <div className="publisher-details">
          <h3>Local de Origem: {publisher.localDeOrigem}</h3>
          <p>Nome Fantasia: {publisher.nomeFantasia}</p>
        </div>
    )
}

export { PublishersDetails }