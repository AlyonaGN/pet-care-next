import Pet from "@/app/components/Pet"

const PetPage = ({ params }: any) => {
  return <Pet name={params.name[0]}></Pet>
}

export default PetPage
