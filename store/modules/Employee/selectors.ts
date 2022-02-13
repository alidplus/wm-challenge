import { RootStoreType } from '../../../models/types';
import { createSelector } from 'reselect';

export const getEmployeesList = createSelector(
  [(state: RootStoreType) => state.employee.list],
  list => list
);