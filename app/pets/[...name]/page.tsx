const PetPage = ({ params }) => {
  console.log(params)
  return <div>Pet: {params.name[0]}</div>
}

export default PetPage
