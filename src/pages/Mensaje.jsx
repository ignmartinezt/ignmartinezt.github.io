import HeaderMensaje from '../components/layout/HeaderMensaje'
import Formulario from '../components/layout/Formulario'
import FooterMensaje from '../components/layout/FooterMensaje'

export default function Mensaje() {
  return (
    <>
      <HeaderMensaje />
      <main>
        <Formulario />
      </main>
      <FooterMensaje />
    </>
  )
}
