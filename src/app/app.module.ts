import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee-list/employee/employee.component';
import { employeeStateReducer } from './store/employee-store/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/employee-store/employee.effects';
import { AddEmployeeFormComponent } from './employee-list/add-employee-form/add-employee-form.component';
import { EditEmployeeFormComponent } from './employee-list/edit-employee-form/edit-employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    AddEmployeeFormComponent,
    EditEmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ employee: employeeStateReducer }, {}),
    EffectsModule.forRoot([EmployeeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
