import { $Values } from 'utility-types';
import { TypeNames } from './enums';
import { ApiExampleResType, IEmploye } from 'models/types';

export type EmployeeStateType = {
  list: IEmploye[]
};

export type PayloadTypes = {
  [TypeNames.LOAD_EMPLOYEES]: IEmploye[]
  [TypeNames.UPDATE_SINGLE_EMPLOYEE]: IEmploye
  [TypeNames.LOAD_SINGLE_EMPLOYEE]: IEmploye
  [TypeNames.REMOVE_SINGLE_EMPLOYEE]: IEmploye
};

export type ActionsValueTypes = {
  toLoadAllEmployees: {
    type: typeof TypeNames.LOAD_EMPLOYEES;
    payload: PayloadTypes[TypeNames.LOAD_EMPLOYEES];
  },
  toInsertEmploye: {
    type: typeof TypeNames.LOAD_SINGLE_EMPLOYEE;
    payload: PayloadTypes[TypeNames.LOAD_SINGLE_EMPLOYEE];
  },
  toUpdateEmploye: {
    type: typeof TypeNames.UPDATE_SINGLE_EMPLOYEE;
    payload: PayloadTypes[TypeNames.UPDATE_SINGLE_EMPLOYEE];
  },
  toDeleteEmploye: {
    type: typeof TypeNames.REMOVE_SINGLE_EMPLOYEE;
    payload: PayloadTypes[TypeNames.REMOVE_SINGLE_EMPLOYEE];
  }
};

export type EmployeeActionTypes = $Values<ActionsValueTypes>