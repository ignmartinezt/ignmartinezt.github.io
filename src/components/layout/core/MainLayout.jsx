// Layout compartido para cuando Header/Footer se repitan en todas las páginas.
// Todavía no se usa: hoy cada página trae su propio header y footer.
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}
