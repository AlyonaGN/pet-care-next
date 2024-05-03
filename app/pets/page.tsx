import Link from "next/link"

const petsLinks = [
  {
    href: "/oxy",
    label: "Oxy",
  },
  {
    href: "/doxie",
    label: "Doxie",
  },
]

const PetsPage = () => {
  return (
    <div>
      {petsLinks.map((link) => (
        <Link key={link.href} href={`/pets/${link.href}`}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default PetsPage
