"use client"

import React, { useState } from "react"
import styled from "styled-components"
import { PetCalendar } from "./PetCalendar"
import { capitalizeFirstLetter } from "../utils"

enum FoodType {
  Natural = "natural",
  Dry = "dry",
  Mix = "mix",
}

enum Castrated {
  Yes = "yes",
  No = "no",
}

enum Gender {
  GoodBoy = "Good Boy",
  GoodGirl = "Good Girl",
}

interface PetProps {
  name: string
}

const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`

const Section = styled.div`
  width: 100%;
  margin: 20px 0;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #0a4431;
  margin-bottom: 10px;
`

const Label = styled.label`
  display: block;
  font-size: 15px;
  color: #0a4431;
`

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`

const Select = styled.select`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`

const TextArea = styled.textarea`
  width: calc(100% - 20px);
  height: 100px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`

const TimelineSection = styled.div`
  width: 100%;
  margin: 20px 0;
`

const TimelineTitle = styled.h2`
  font-size: 1.5rem;
  color: #0a4431;
  margin-bottom: 10px;
`

const Pet: React.FC<PetProps> = ({ name }) => {
  const [petName, setPetName] = useState<string>(capitalizeFirstLetter(name))
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null)
  const [breed, setBreed] = useState<string>("Dachshund")
  const [weight, setWeight] = useState<number>(4)
  const [chipNumber, setChipNumber] = useState<string>("")
  const [foodType, setFoodType] = useState<FoodType>(FoodType.Natural)
  const [castrated, setCastrated] = useState<Castrated>(Castrated.No)
  const [conditions, setConditions] = useState<string>("")
  const [sex, setSex] = useState<Gender>(Gender.GoodBoy)

  return (
    <PetContainer>
      <Section>
        <SectionTitle>Basic Information</SectionTitle>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            value={petName}
            onChange={(e) => setPetName(capitalizeFirstLetter(e.target.value))}
          />
        </div>

        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={dateOfBirth ? dateOfBirth.toISOString().substr(0, 10) : ""}
            onChange={(e) =>
              setDateOfBirth(e.target.value ? new Date(e.target.value) : null)
            }
          />
        </div>

        <div>
          <Label htmlFor="breed">Breed</Label>
          <Input
            id="breed"
            type="text"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        <div>
          <Label htmlFor="chipNumber">Chip Number</Label>
          <Input
            id="chipNumber"
            type="text"
            placeholder="Chip Number"
            value={chipNumber}
            onChange={(e) => setChipNumber(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="foodType">Type of Food</Label>
          <Select
            id="foodType"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value as FoodType)}
          >
            <option value={FoodType.Natural}>Natural</option>
            <option value={FoodType.Dry}>Dry</option>
            <option value={FoodType.Mix}>Mix</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="sex">Sex</Label>
          <Select
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value as Gender)}
          >
            <option value={Gender.GoodBoy}>Good Boy</option>
            <option value={Gender.GoodGirl}>Good Girl</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="castrated">Castrated</Label>
          <Select
            id="castrated"
            value={castrated}
            onChange={(e) => setCastrated(e.target.value as Castrated)}
          >
            <option value={Castrated.Yes}>Yes</option>
            <option value={Castrated.No}>No</option>
          </Select>
        </div>
      </Section>
      <Section>
        <SectionTitle>Known Conditions and Illnesses</SectionTitle>
        <TextArea
          placeholder="Enter known conditions and illnesses..."
          value={conditions}
          onChange={(e) => setConditions(e.target.value)}
        />
      </Section>
      <TimelineSection>
        <TimelineTitle>Timeline</TimelineTitle>
        <PetCalendar />
      </TimelineSection>
    </PetContainer>
  )
}

export default Pet
