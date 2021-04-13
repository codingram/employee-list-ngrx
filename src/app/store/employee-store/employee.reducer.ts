// tslint:disable-next-line: quotemark
import { Action, ActionReducer, createReducer, on, State } from "@ngrx/store";
import { addEmployee, editEmployee, loadEmployees, removeEmployee } from './employee.action';

export interface Employee {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export const employeeState: Employee[] = [];

const employeeReducer = createReducer(
    employeeState,

    on(loadEmployees, (state, props: any) => {
        return props.data;
    }),

    on(addEmployee, (state, props: { data: Employee }) => {
        const newstate = [...state];
        newstate.push(props.data);
        return newstate;
    }),

    on(editEmployee, (state, props: { data: Employee }) => {
        const newState = state.map((emp) => {
            if (emp.id === props.data.id) {
                return props.data;
            } else {
                return emp;
            }
        });
        return newState;
    }),

    on(removeEmployee, (state, props: { id: number }) => {
        const filteredState = state.filter((value) => {
            return value.id !== props.id;
        });
        return [...filteredState];
    }),
);

export function employeeStateReducer(state: Employee[] | undefined, action: Action): any {
    return employeeReducer(state, action);
}
