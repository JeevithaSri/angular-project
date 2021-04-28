import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ ITask} from 'src/app/models/task.models';
import { CreatetaskService } from './createtask.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss']
})
export class CreatetaskComponent implements OnInit {

  task: ITask={
    projectname:'',
    taskname:'',
    startdate:'',
    enddate:'',
    assignedto:''
  }

  constructor(private _taskService: CreatetaskService,private router:Router) { }

  onSubmit(){

    this._taskService.addTask(this.task).subscribe(
      (result) =>
      {
        window.alert("Task assigned Successfully");
        this.router.navigate(['manager/newtask']);
      },
      (err) => console.log(err)
      );
  }

  ngOnInit(): void {
  }

}
