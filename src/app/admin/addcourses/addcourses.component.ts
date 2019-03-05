import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addNewVideo(){
    this.router.navigate(['/admin/addcourses/videos']);
  }
}
