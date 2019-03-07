import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-instructor',
  templateUrl: './manage-instructor.component.html',
  styleUrls: ['./manage-instructor.component.css']
})
export class ManageInstructorComponent implements OnInit {
  retrievedData: any = [];
  elements: any = [
    this.retrievedData = JSON.parse(localStorage.getItem("info"))
  ];

  headElements = [ 'Firstname', 'Lastname', 'number', 'city', 'country'];

  constructor() { }

  ngOnInit() {
  }

}
