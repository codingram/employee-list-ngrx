import { createAction, props } from '@ngrx/store';
import { Employee } from './employee.reducer';

export const requestLoadEmployees = createAction(
    '[employeeList component] Request Load',
);

export const loadEmployees = createAction(
    '[employeeList component] Load',
    props<{ data: Employee[] }>()
);

export const addEmployee = createAction(
    '[employeeList component] Add',
    props<{data: Employee}>()
);

export const editEmployee = createAction(
    '[employeeList component] Edit',
    props<{data: Employee}>()
);

export const removeEmployee = createAction(
    '[employeeList component] Remove',
    props<{ id: number }>()
);

