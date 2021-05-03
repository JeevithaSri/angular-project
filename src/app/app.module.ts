import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { ManagerComponent } from './manager/manager.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

import { CreatetaskComponent } from './createtask/createtask.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule } from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import {AuthModule} from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AssignprojectComponent } from './assignproject/assignproject.component';
import { CompletionComponent } from './completion/completion.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {AdminreportComponent} from './adminreport/adminreport.component';
import { ManagerreportComponent } from './managerreport/managerreport.component';
import { LoginService } from './auth/component/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { EmpProjectComponent } from './emp-project/emp-project.component';
import { EmpReportComponent } from './emp-report/emp-report.component';

import { CreateAdminProjectComponent } from './create-admin-project/create-admin-project.component';
import { ListAdminProjectComponent } from './list-admin-project/list-admin-project.component';
// import { EmpProjectComponent } from './emp-project/emp-project.component';
// import { EmpReportComponent } from  './emp-report/emp-report.component';



@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    ManagerDashboardComponent,
    ProfileComponent,
    AdminComponent,
    EmployeeComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
  
    CreatetaskComponent,
    ViewprojectComponent,
    AssignprojectComponent,
    CompletionComponent,
    AdminreportComponent,
    ManagerreportComponent,
    EmpProjectComponent,
    EmpReportComponent,
    
    
    CreateAdminProjectComponent,
    ListAdminProjectComponent,
    // EmpProjectComponent,
    // EmpReportComponent
    
  ],
  imports: [
    BrowserModule,AuthModule,SharedModule,MatSelectModule,
    AppRoutingModule,FlexLayoutModule,MatGridListModule,MatIconModule,
    FormsModule,MatCardModule,MatInputModule,MatFormFieldModule,MatTableModule ,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,
    MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,BrowserAnimationsModule,HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
