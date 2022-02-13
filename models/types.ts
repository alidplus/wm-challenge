import { EmployeeStateType } from 'store/modules/Employee/types';
export type RootStoreType = { employee: EmployeeStateType };
export type ApiExampleResType = { title: string }; 

export type EmployeStatusEnum = 'ADDED' | 'IN-CHECK' | 'APPROVED' | 'ACTIVE' | 'INACTIVE'
export interface IEmploye { _id: string, name: string, email?: string, status: EmployeStatusEnum };