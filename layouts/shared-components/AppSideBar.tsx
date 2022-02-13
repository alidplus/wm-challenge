import { FC } from 'react'
import { Nav, NavDropdown } from "react-bootstrap";


const AppSideBar: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Nav className={`justify-content-end flex-grow-1 pe-3 ${className}`}>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/employees">Employees</Nav.Link>
    </Nav>
  )
}

export default AppSideBar