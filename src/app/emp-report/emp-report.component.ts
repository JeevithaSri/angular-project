import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ IEmpReport } from 'src/app/models/emp-report.models';
import { EmpReportService } from './emp-report.service';

@Component({
  selector: 'app-emp-report',
  templateUrl: './emp-report.component.html',
  styleUrls: ['./emp-report.component.scss']
})
export class EmpReportComponent implements OnInit {

  empreport: IEmpReport={
    projectname:'',
    taskname:'',
    progress:''
  }


  constructor(private _empreportService: EmpReportService,private router:Router) { }

  onSubmit(){

    this._empreportService.addEmpReport(this.empreport).subscribe(
      (result) =>
      {
        window.alert("Report created Successfully");
        this.router.navigate(['employee/report']);
      },
      (err) => console.log(err)
      );
  }


  ngOnInit(): void {
  }

}
