import { Component, OnInit } from '@angular/core';
import { HTTPServiceCallService } from '../service/httpservice-call.service';
import { Employee } from '../employee/employee.module';

@Component({
  selector: 'dummy-page-one',
  templateUrl: './dummy-page-one.component.html',
  styleUrls: ['./dummy-page-one.component.scss']
})
export class DummyPageOneComponent implements OnInit {

  private _empArray: Employee[];
  private error: string = '';

  constructor(private _httpservice: HTTPServiceCallService) { }

  ngOnInit() {
  }

  showList() {
    this._httpservice.getEmployeesList().subscribe((data) => {
      this._empArray = data
    }, error=>{
      this.error = error;
    })
  }

}
