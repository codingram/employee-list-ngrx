import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addEmployee, editEmployee } from 'src/app/store/employee-store/employee.action';
import { Employee } from 'src/app/store/employee-store/employee.reducer';
declare const $: any;

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css']
})
export class EditEmployeeFormComponent implements OnInit {

  editEmployeeForm: FormGroup;
  @Input() employeeData: Employee;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.editEmployeeForm = this.fb.group({
      id: [this.employeeData.id, Validators.required],
      first_name: [this.employeeData.first_name, Validators.required],
      last_name: [this.employeeData.last_name, Validators.required],
      email: [this.employeeData.email, Validators.required],
      avatar: [this.employeeData.avatar, Validators.required],
    });
  }

  editEmployee(): void {
    const employeeData: Employee = {
      ...this.editEmployeeForm.value
    };
    this.store.dispatch(editEmployee({ data: employeeData }));
    this.editEmployeeForm.reset();
    $('#editEmployeeModal').modal('hide');
  }

}
