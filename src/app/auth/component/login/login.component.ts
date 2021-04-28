import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService} from './login.service';
import { Router} from '@angular/router';
import { IEmployee} from 'src/app/models/login.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  employee:IEmployee={
    id:'',
    username:'',
    role:'',
    contactpreference:'',
    email:'',
    password:''

  }
      // employee!:IEmployee;
      constructor(private _loginService: LoginService,private route:Router) { }
 
   onSubmit(){
    // this._loginService.getEmployees().subscribe(
    //   (response)=>{
    //   console.log(response);
    // });

  this._loginService.getEmployee(this.employee.username,this.employee.password).subscribe(
    (response) =>
    {
      if (!response||response.length==0)
      {
        window.alert("Username or Password Incorrect");
        this.employee.username="";
        this.employee.password="";
      }
      else{
        
        this.employee=response[0];
        var Role:string=this.employee.role.toLowerCase();
        switch(Role){
          case "admin":
            this.route.navigate(['/admin']);
            break;
          case "manager":
            this.route.navigate(["/manager"]);
            break;
          case "employee":
            this.route.navigate(["/employee"]);
            break;
          default:
            window.alert("Invalid");
            break;
        }

      }
    },
    (err) => console.log(err)
    );
}
}
