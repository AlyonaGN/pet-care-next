import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
      </header>
      <div className={inter.className}>{children}</div>
    </div>
  )
}
