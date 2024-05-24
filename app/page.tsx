import { Header } from "./components/Header"
import { navLinks } from "./utils"
import MainBlob from "./components/MainBlob"

export default function Main() {
  return (
    <main>
      <Header navLinks={navLinks} />
      <MainBlob />
    </main>
  )
}
