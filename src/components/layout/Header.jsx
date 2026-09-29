import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">CV</Link>
        <a href="#PORTAFOLIO" className="nav-link">PORTAFOLIO</a>
        <a href="#CONTACTO" className="nav-link">CONTACTO</a>
      </nav>
    </header>
  )
}

export default Header
