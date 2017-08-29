import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {Students} from './students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [HttpService]
})
export class StudentsComponent implements OnInit {

   students: Students[] = [];

  constructor(private httpService: HttpService) { }
  ngOnInit() {

    this.httpService.getData()
      .subscribe((data: Response) => this.students = data.json());
  }


}
