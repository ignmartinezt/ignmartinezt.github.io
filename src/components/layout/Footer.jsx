import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id="CONTACTO">
      <h2>Contacto</h2>
      <p>Correo: <a href="mailto:ign.martinezt@duocuc.cl">TU_CORREO@duocuc.cl</a></p>
      <p>GitHub: <a href="https://github.com/ignmartinezt">ignmartinezt</a></p>
      <p>Para enviarme un mensaje desde este sitio, ingresa <Link to="/mensaje">aquí</Link></p>
    </footer>
  )
}

export default Footer
