import styled from "styled-components"
import { Inter } from "next/font/google"
import Link from "next/link"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  padding: 20px;
  text-align: center;
`

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pet Care",
  description: "App for Taking Care of Your Pet",
}

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/pets",
    label: "Pets",
  },
]

export default function Home({ children }) {
  return (
    <Container>
      <Main>
        <nav>
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>

        <div className={inter.className}>{children}</div>
      </Main>
    </Container>
  )
}
