import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-becomeaninstructor',
  templateUrl: './becomeaninstructor.component.html',
  styleUrls: ['./becomeaninstructor.component.css']
})
export class BecomeaninstructorComponent implements OnInit {
  instructorForm : FormGroup=new FormGroup({
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    number:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    cpass:new FormControl('',Validators.required),
    password:new FormControl('', Validators.required)
  });
  instructorData:any=[];

  constructor(private toastr: ToastrService) { }
  ngOnInit() {
   

  }
 

submit(){
  if(!this.instructorForm.valid){
       this.toastr.error('', 'Fill all Required fields');
    return;
  }else{
    this.toastr.success('','Information Submitted !' );
    this.toastr.success('','Please Wait for the response!' );

  }
  this.instructorData = 
  {
    firstname: this.instructorForm.controls.firstname.value,
    lastname: this.instructorForm.controls.lastname.value,
    number: this.instructorForm.controls.number.value,
    city: this.instructorForm.controls.city.value,
    country: this.instructorForm.controls.country.value,
    email: this.instructorForm.controls.email.value
  };
  console.log(this.instructorData);

  let inputInfo=localStorage.setItem('info', JSON.stringify(this.instructorData));

}
}
