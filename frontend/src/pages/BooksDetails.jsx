import './books.css'

const BooksDetails = ({ book }) => {
    return (
        <div className="book-details" >
          <h3>Título: {book.titulo}</h3>
          <p>Data de Lancamento: {book.dataDeLancamento}</p>
        </div>
    )
}

export { BooksDetails }