import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee;
  @Output() removeEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  remove(id): void {
    this.removeEvent.emit({ id });
  }

  edit(employee): void {
    this.editEvent.emit(employee);
  }

}
