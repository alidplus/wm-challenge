import type { NextPage } from 'next'
import Head from 'next/head'
import EmployeesGrid from 'components/employees/Grid'
import { loadAllEmployees } from 'store/modules/Employee/operations';
import { Breadcrumb } from 'react-bootstrap'

const Employees: NextPage = () => {
  return (
    <>
      <Head>
        <title>Workmotion App | Employees</title>
      </Head>

      <h2 className="h3">Employees</h2>
      
      <Breadcrumb>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Employees</Breadcrumb.Item>
      </Breadcrumb>

      <EmployeesGrid />
    </>
  )
}

export default Employees
