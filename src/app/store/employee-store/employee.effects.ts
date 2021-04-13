import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EmployeeService } from 'src/app/employee.service';
import { loadEmployees, requestLoadEmployees } from './employee.action';

@Injectable()
export class EmployeeEffects {

    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService,
        private store: Store
    ) { }

    loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestLoadEmployees),
            mergeMap(() => this.employeeService.getEmployees().pipe(
                map(res => (loadEmployees({ data: res.data })))
            )))
    );

}
