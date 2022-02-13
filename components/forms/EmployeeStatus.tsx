import { FC } from "react";
import { EmployeStatusEnum } from "models/types";
import { ListGroup } from "react-bootstrap";
import cn from 'classnames'

interface IEmployeeStatusProps {
  value: EmployeStatusEnum,
  onChange?: (status: EmployeStatusEnum) => any,
  className?: string
}

const statuses: EmployeStatusEnum[] = ['ADDED', 'IN-CHECK', 'APPROVED', 'ACTIVE', 'INACTIVE']

const EmployeeStatus: FC<IEmployeeStatusProps> = ({ value, onChange = () => null, className }) => {
  const currentStatusIndex = statuses.indexOf(value)
  return (
    <ListGroup horizontal className={cn(className, 'd-flex employee-status-field')}>
      {statuses.map((status, statusIndex) => (
        <ListGroup.Item
          className="d-flex align-items-center justify-content-center flex-grow-1 text-nowrap w-20"
          key={status}
          variant={currentStatusIndex >= statusIndex ? "success" : "secondary"}
          action
          onClick={onChange.bind(null, status)}
        >
          <span>{status}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default EmployeeStatus