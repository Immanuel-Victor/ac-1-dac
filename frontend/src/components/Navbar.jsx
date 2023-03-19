import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Sistema de Livros</h1>
        </Link>
      </div>
      <nav>
        <div>
          <Link to={"/livros"}>
            <p>Livros</p>
          </Link>
          <Link to={"/editoras"}>
            <p>Editoras</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export { NavBar }