"use client"

import Link from "next/link"
import styled from "styled-components"

interface PetsLinks {
  href: string
  label: string
}

interface PetsProps {
  petsLinks: Array<PetsLinks>
}

const PetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const PetLink = styled.a`
  color: #0a4431;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 5px;
  background: #e0f7e8;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #c3eace;
    color: #145c3c;
  }
`

const Pets = ({ petsLinks }: PetsProps) => {
  return (
    <PetsContainer>
      {petsLinks.map((link) => (
        <Link
          key={link.href}
          href={`/pets/${link.href}`}
          passHref
          legacyBehavior
        >
          <PetLink>{link.label}</PetLink>
        </Link>
      ))}
    </PetsContainer>
  )
}

export default Pets
