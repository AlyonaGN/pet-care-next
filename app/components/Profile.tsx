"use client"

import React, { useState } from "react"
import styled from "styled-components"

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f0f0;
  padding: 20px;
`

const ProfileCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
`

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  cursor: pointer;
  margin-bottom: 20px;
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

const Profile: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [petPreference, setPetPreference] = useState<string>("dog")

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          setProfilePicture(e.target.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        {profilePicture && (
          <ProfilePicture src={profilePicture} alt="Profile Picture" />
        )}
        <Input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Select
          value={petPreference}
          onChange={(e) => setPetPreference(e.target.value)}
        >
          <option value="dog">Dog Lover</option>
          <option value="cat">Cat Lover</option>
          <option value="other">Other</option>
        </Select>
      </ProfileCard>
    </ProfileContainer>
  )
}

export default Profile
