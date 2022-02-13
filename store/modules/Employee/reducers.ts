import { TypeNames } from './enums';
import { EmployeeActionTypes, EmployeeStateType } from './types';

const initialState: EmployeeStateType = {
  list: []
};

export const employeeReducer = (state = initialState, action: EmployeeActionTypes): EmployeeStateType => {
  switch (action.type) {
    case TypeNames.LOAD_EMPLOYEES:
      return { ...state, list: action.payload };
    case TypeNames.UPDATE_SINGLE_EMPLOYEE: {
      const list = Array.from(state.list)
      const index = list.findIndex(item => item._id === action.payload._id)
      if (index > -1) {
        list.splice(index, 1, action.payload)
        return { ...state, list };
      }
    }
    case TypeNames.REMOVE_SINGLE_EMPLOYEE: {
      const list = Array.from(state.list)
      const index = list.findIndex(item => item._id === action.payload._id)
      if (index > -1) {
        list.splice(index, 1)
        return { ...state, list };
      }
    }
    case TypeNames.LOAD_SINGLE_EMPLOYEE: {
      const list = Array.from(state.list)
      list.push(action.payload)
      return { ...state, list };
    }
    default:
      return state;
  }
};
