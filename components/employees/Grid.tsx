import { useEffect } from "react";
import { Button, ButtonGroup, Form, FormControl, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getEmployeesList } from 'store/modules/Employee/selectors'
import EmployeeStatus from "../forms/EmployeeStatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { updateEmployee, loadAllEmployees, removeEmployee } from 'store/modules/Employee/operations';
import { EmployeStatusEnum, IEmploye } from "models/types";
import EditEmployee from './Edit'

export default function EmployeesGrid(): JSX.Element {
  const dispatch = useDispatch();
  const employees = useSelector(getEmployeesList)
  const handleStatusChange = (employee: IEmploye, status: EmployeStatusEnum) => {
    dispatch(updateEmployee(employee, { status }));
    const focusedElement: (Element & { blur: () => any }) | null = document.querySelector(':focus')
    if (focusedElement) focusedElement.blur()
  }
  const handleDelete = (employee: IEmploye) => {
    dispatch(removeEmployee(employee));
  }
  useEffect(() => {
    dispatch(loadAllEmployees());
  }, []);
  return (
    <>
      <div className="d-flex mb-3">
        <Form className="me-auto">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <EditEmployee btnVariant="outline-primary" btnClassName="ps-3 pe-4" employee={{ _id: '', name: '', status: 'ADDED', email: '' }}>
          <FontAwesomeIcon icon={faPlus} width={16} className="me-2" />
          Create
        </EditEmployee>
      </div>
      <ListGroup as="ol">
        {employees.map(employee => (
          <ListGroup.Item
            key={employee._id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <img src="/default-profile.jpg" className="img-thumbnail mx-2" width={50} />
            <div className="ms-2 me-auto">
              <div className="fw-bold">{employee.name}</div>
              <small>{employee.email}</small>
            </div>
            <EmployeeStatus className="my-auto" value={employee.status} onChange={handleStatusChange.bind(null, employee)} />
            <ButtonGroup className="ms-2 my-auto">
              <Button variant="outline-danger" onClick={handleDelete.bind(null, employee)}>
                <FontAwesomeIcon icon={faTrash} width={16} />
              </Button>

              <EditEmployee btnVariant="outline-secondary" employee={employee}>
                <FontAwesomeIcon icon={faEdit} width={16} />
              </EditEmployee>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

