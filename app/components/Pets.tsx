import Link from "next/link"

interface PetsLinks {
  href: string
  label: string
}

interface PetsProps {
  petsLinks: Array<PetsLinks>
}

const Pets = ({ petsLinks }: PetsProps) => {
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

export default Pets
