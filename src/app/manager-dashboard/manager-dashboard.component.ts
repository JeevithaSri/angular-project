import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private router:Router) { }
  button1clicked(): void{
    this.router.navigateByUrl('manager/newproject');
  }
  button2clicked(): void{
    this.router.navigateByUrl('manager/newtask');
  }
  ngOnInit(): void {
  }

}
