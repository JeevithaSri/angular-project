import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  // Project: string;
  slno: string;
  task: string;
  assigneddate : String;
  // Start_date : string;
  deadline: String;
  // Priority:string;
  // Status:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {slno:'',task:'',assigneddate:'',deadline:''},
  {slno:'',task:'',assigneddate:'',deadline:''},
  {slno:'',task:'',assigneddate:'',deadline:''},
  {slno:'',task:'',assigneddate:'',deadline:''},
  {slno:'',task:'',assigneddate:'',deadline:''}
  ]
@Component({
  selector: 'app-emp-project',
  templateUrl: './emp-project.component.html',
  styleUrls: ['./emp-project.component.scss']
})




export class EmpProjectComponent implements OnInit {
  displayedColumns: string[] = ['slno', 'task', 'assigneddate','deadline'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}

