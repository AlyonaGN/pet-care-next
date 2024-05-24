"use client"

import Link from "next/link"
import styled from "styled-components"

interface NavLink {
  href: string
  label: string
}

interface HeaderProps {
  navLinks: Array<NavLink>
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #0a4431;
  padding: 15px 10px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  margin: 0 10px;
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`

export const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  return (
    <Nav>
      <Ul>
        {navLinks.map((link) => (
          <Li key={link.href}>
            <Link href={link.href} passHref legacyBehavior>
              <StyledLink>{link.label}</StyledLink>
            </Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}
