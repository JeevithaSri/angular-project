import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  id: string;
  taskname: String;
  progress: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '', name: '', taskname: '', progress: ''},
  {id: '', name: '', taskname:'', progress: ''},
  {id: '', name: '', taskname:'', progress: ''},
  {id: '', name: '', taskname:'', progress: ''},
  {id: '', name: '', taskname:'', progress: ''}
]
@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'taskname', 'progress'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}


