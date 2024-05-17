interface PetProps {
  name: string
}

const Pet = ({ name }: PetProps) => {
  return <div>Pet: {name}</div>
}

export default Pet
