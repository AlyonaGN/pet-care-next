"use client"
import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css" // Import the default styling
import styled from "styled-components"

const StyledCalendar = styled(Calendar)`
  &.react-calendar {
    border: none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
  }

  .react-calendar__tile {
    border-radius: 5px;
    &:hover {
      background-color: #e0f7e8;
    }
  }

  .react-calendar__tile--active {
    background-color: #c3eace;
    color: #0a4431;
  }
`

export const PetCalendar = () => {
  const [calendarDate, setCalendarDate] = useState<Date | Date[]>(new Date())

  return (
    <StyledCalendar
      onChange={(date: Date | Date[]) => setCalendarDate(date)}
      value={calendarDate}
    />
  )
}
