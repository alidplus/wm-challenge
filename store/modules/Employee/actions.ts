import { TypeNames } from './enums';
import { EmployeeActionTypes, PayloadTypes } from './types';

export const toLoadAllEmployees =
( payload: PayloadTypes[TypeNames.LOAD_EMPLOYEES] ): EmployeeActionTypes => ({
  type: TypeNames.LOAD_EMPLOYEES,
  payload
});

export const toUpdateEmploye =
( payload: PayloadTypes[TypeNames.UPDATE_SINGLE_EMPLOYEE] ): EmployeeActionTypes => ({
  type: TypeNames.UPDATE_SINGLE_EMPLOYEE,
  payload
});

export const toInsertEmploye =
( payload: PayloadTypes[TypeNames.LOAD_SINGLE_EMPLOYEE] ): EmployeeActionTypes => ({
  type: TypeNames.LOAD_SINGLE_EMPLOYEE,
  payload
});

export const toDeleteEmploye = 
( payload: PayloadTypes[TypeNames.REMOVE_SINGLE_EMPLOYEE] ): EmployeeActionTypes => ({
  type: TypeNames.REMOVE_SINGLE_EMPLOYEE,
  payload
});