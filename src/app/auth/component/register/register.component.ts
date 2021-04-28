import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ IEmployee} from 'src/app/models/login.models';
import { RegisterService} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  employee:IEmployee={
    id:'',
    username:'',
    role:'',
    contactpreference:'',
    email:'',
    password:''

  }

  constructor(private _registerService: RegisterService,private router:Router) { }
  onSubmit(){

  this._registerService.addEmployee(this.employee).subscribe(
    (result) =>
    {
      window.alert("Register Successfully");
      this.router.navigate(['login']);
    },
    (err) => console.log(err)
    );
}

}
