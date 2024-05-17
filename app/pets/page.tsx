import Pets from "../components/Pets"

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
  return <Pets petsLinks={petsLinks}></Pets>
}

export default PetsPage
