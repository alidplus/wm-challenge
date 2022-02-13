import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmployeStatusEnum, IEmploye } from 'models/types'
import { FC, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateEmployee, createEmployee } from 'store/modules/Employee/operations';
import { Formik, Field, Form as FormikForm, FormikHelpers, FieldProps } from 'formik';
import * as Yup from 'yup';

type EmployeeUpdateData = Partial<IEmploye>

const employeeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email'),
});

interface IEditEmployeeProps {
  employee: IEmploye,
  btnVariant?: string
  btnClassName?: string
}

const EditEmployee: FC<IEditEmployeeProps> = ({ employee = {}, children, btnVariant, btnClassName }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = (update: EmployeeUpdateData) => {
    if (employee._id)
      dispatch(updateEmployee(employee, update));
    else
      dispatch(createEmployee(update));
  }
  return (
    <>
      <Button variant={btnVariant || "outline-primary"} className={btnClassName} onClick={handleShow}>
        {children || 'missing children'}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Formik
          initialValues={employee}
          validationSchema={employeeSchema}
          onSubmit={( values: EmployeeUpdateData, { setSubmitting }: FormikHelpers<EmployeeUpdateData> ) => {
            handleSubmit(values)
            setSubmitting(false);
            handleClose();
          }}
        >
          <FormikForm>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Field name="name">
                  {({
                    field,
                    form: { touched, errors },
                    meta,
                  }: FieldProps) => (
                    <>
                      <Form.Control placeholder="John" {...field}/>
                      {meta.touched && meta.error && (
                        <Form.Text className="text-muted">{meta.error}</Form.Text>
                      )}
                    </>
                  )}
                </Field>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Field name="email">
                  {({
                    field,
                    form: { touched, errors },
                    meta,
                  }: FieldProps) => (
                    <>
                      <Form.Control type="email" placeholder="john@acme.com" {...field}/>
                      {meta.touched && meta.error && (
                        <Form.Text className="text-muted">{meta.error}</Form.Text>
                      )}
                    </>
                  )}
                </Field>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">Save</Button>
            </Modal.Footer>
          </FormikForm>
        </Formik>
      </Modal>
    </>
  )
}

export default EditEmployee