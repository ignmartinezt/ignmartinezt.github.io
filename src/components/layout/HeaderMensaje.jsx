import { Link } from 'react-router-dom'

function HeaderMensaje() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">Volver</Link>
      </nav>
    </header>
  )
}

export default HeaderMensaje
