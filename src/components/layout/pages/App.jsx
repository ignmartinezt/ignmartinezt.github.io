import Header from '../components/layout/Header'
import Presentacion from '../components/layout/Presentacion'
import Perfil from '../components/layout/Perfil'
import Footer from '../components/layout/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="CV">
          <Presentacion />
          <Perfil />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
