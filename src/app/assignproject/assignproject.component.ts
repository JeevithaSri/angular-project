import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ IProject} from 'src/app/models/project.models';
import { AssignprojectService} from './assignproject.service';


@Component({
  selector: 'app-assignproject',
  templateUrl: './assignproject.component.html',
  styleUrls: ['./assignproject.component.scss']
})
export class AssignprojectComponent implements OnInit {

  project:IProject={
    title:'',
    // role:'',
    startdate:'',
    enddate:'',
    description:''

  }

  constructor(private _projectService: AssignprojectService,private router:Router) { }

  onSubmit(){

    this._projectService.addProject(this.project).subscribe(
      (result) =>
      {
        window.alert("Project assigned Successfully");
        this.router.navigate(['admin/assignproject']);
      },
      (err) => console.log(err)
      );
  }

  ngOnInit(): void {
  }

}
