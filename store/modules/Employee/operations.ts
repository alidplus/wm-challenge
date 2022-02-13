import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IEmploye, RootStoreType } from '../../../models/types';
import { EmployeeActionTypes } from './types';
import { toLoadAllEmployees, toUpdateEmploye, toDeleteEmploye } from './actions';

export const loadAllEmployees: ActionCreator<ThunkAction<Promise<Action>, RootStoreType, void, any>> =
  () => async (dispatch: Dispatch<EmployeeActionTypes>): Promise<Action> => {
    const result = await fetch('/api/employees', { method: 'GET' });
    const employees = await result.json();
    return dispatch(toLoadAllEmployees(employees));
  };


  export const updateEmployee: ActionCreator<ThunkAction<Promise<Action>, RootStoreType, void, any>> =
  (employee: IEmploye, update: Partial<IEmploye>) => async (dispatch: Dispatch<EmployeeActionTypes>): Promise<Action> => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...update })
    };
    const result = await fetch(`/api/employee/${employee._id}`, requestOptions);
    const employees = await result.json();
    return dispatch(toUpdateEmploye(employees));
  };

  export const createEmployee: ActionCreator<ThunkAction<Promise<Action>, RootStoreType, void, any>> =
    (data: Partial<IEmploye>) => async (dispatch: Dispatch<EmployeeActionTypes>): Promise<Action> => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data })
      };
      const result = await fetch(`/api/employees`, requestOptions);
      const employee = await result.json();
      return dispatch(toUpdateEmploye(employee));
    };
  export const removeEmployee: ActionCreator<ThunkAction<Promise<Action>, RootStoreType, void, any>> =
    (target: IEmploye) => async (dispatch: Dispatch<EmployeeActionTypes>): Promise<Action> => {
      const result = await fetch(`/api/employee/${target._id}`, { method: 'DELETE' });
      const employee: IEmploye = await result.json();
      return dispatch(toDeleteEmploye(employee));
    };
  
    

  