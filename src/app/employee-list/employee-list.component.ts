import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeEmployee, requestLoadEmployees } from '../store/employee-store/employee.action';
import { Employee } from '../store/employee-store/employee.reducer';
declare const $: any;
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  data$: Observable<Employee[]>;
  editData: Employee;
  constructor(private store: Store<any>) {
    this.data$ = this.store.select('employee');
  }

  ngOnInit(): void {
    this.store.dispatch(requestLoadEmployees());
  }

  remove(id): void {
    this.store.dispatch(removeEmployee(id));
  }

  edit(data: Employee): void {
    this.editData = data;
    $('#editEmployeeModal').modal('show');
    $('#editEmployeeModal').on('hidden.bs.modal', (e) => {
      this.editData = null;
    });
  }

  saveEdits(data: Employee): void {
    this.store.dispatch(removeEmployee(data));
  }
}
