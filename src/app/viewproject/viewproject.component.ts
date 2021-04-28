
import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  Project: string;
  position: number;
  Task: string;
  Assigned_To: string;
  Start_date : string;
  Deadline: string;
  Priority:string;
  Status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Project: '', Task: '', Assigned_To: '',Start_date:' ',Deadline:'',Priority:'',Status:''},
  {position: 2, Project: '', Task: '', Assigned_To: '',Start_date:' ',Deadline:'',Priority:'',Status:''},
  {position: 3, Project: '', Task: '', Assigned_To: '',Start_date:' ',Deadline:'',Priority:'',Status:''},
  {position: 4, Project: '', Task: '', Assigned_To: '',Start_date:' ',Deadline:'',Priority:'',Status:''},
  {position: 5, Project: '', Task: '', Assigned_To: '',Start_date:' ',Deadline:'',Priority:'',Status:''}
  
];
@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {
   
    displayedColumns: string[] = ['position', 'Project', 'Task', 'Assigned_To','Start_Date','Deadline','Priority','Status'];
    dataSource = ELEMENT_DATA;
  

  constructor() { }

  ngOnInit(): void {
    
    
}

}
