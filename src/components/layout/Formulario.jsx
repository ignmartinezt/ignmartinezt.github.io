function Formulario() {
  return (
    <form id="formulario-contacto">
      <label htmlFor="correo">Correo:</label>
      <input type="email" id="correo" name="correo" />

      <label htmlFor="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" rows="5"></textarea>

      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario
