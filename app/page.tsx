import { Header } from "./components/Header"
import { navLinks } from "./utils"

export default function Main() {
  return (
    <main>
      <Header navLinks={navLinks} />
    </main>
  )
}
