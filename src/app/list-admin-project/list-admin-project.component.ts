import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  id:number;
  name: string;
  project:string;
  startdate:string;
  enddate: string;
  progress: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: ' ',project:' ', startdate: ' ', enddate: '',progress:' '},
  {id: 2, name: ' ',project:' ', startdate: ' ', enddate: '',progress:' '},
  {id: 3, name: ' ', project:' ',startdate: ' ', enddate: ' ',progress:' '},
  {id: 4, name: ' ',project:' ',startdate:' ' ,enddate: ' ',progress:' '},
  {id: 5, name: ' ',project:' ', startdate: ' ' ,enddate: ' ',progress:' '},
 
];
@Component({
  selector: 'list-admin-project',
  templateUrl: './list-admin-project.component.html',
  styleUrls: ['./list-admin-project.component.scss']
})
export class ListAdminProjectComponent implements OnInit {
  displayedColumns: string[] = ['id', 'project', 'name', 'startdate', 'enddate', 'progress'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}



