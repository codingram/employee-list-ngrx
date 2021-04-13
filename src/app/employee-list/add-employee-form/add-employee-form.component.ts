import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addEmployee } from 'src/app/store/employee-store/employee.action';
import { Employee } from 'src/app/store/employee-store/employee.reducer';
declare const $: any;

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  addEmployeeForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      first_name: ['123123', Validators.required],
      last_name: ['123123', Validators.required],
      email: ['123123', Validators.required],
      avatar: ['https://reqres.in/img/faces/4-image.jpg', Validators.required],
    });
  }

  addEmployee(): void {
    const employeeData: Employee = {
      id: new Date().getTime(),
      ...this.addEmployeeForm.value
    };
    this.store.dispatch(addEmployee({ data: employeeData }));
    this.addEmployeeForm.reset();
    $('#addEmployeeModal').modal('hide');
  }

}
