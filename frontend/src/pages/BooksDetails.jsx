import { Link } from 'react-router-dom'
import './books.css'

const BooksDetails = ({ book }) => {
  const search = `?id=${book.id}&titulo=${book.titulo}&dataDeLancamento=${book.dataDeLancamento}`

    return (
        <div className="book-details" >
          <h3>Título: {book.titulo}</h3>
          <p>Data de Lancamento: {book.dataDeLancamento}</p>
          <Link to={{pathname:'/editarLivro', search }} >editar</Link>
        </div>
    )
}

export { BooksDetails }