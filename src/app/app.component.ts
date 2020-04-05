import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eduhub-project';
  constructor(private router:Router){}
  isValid(): boolean {
    if ((this.router.url == '/admin')) {
              return false;
      }
    
    else if ((this.router.url == '/admin/addcourses')) {
      return false;
}
else if ((this.router.url == '/admin/addcourses/videos')) {
  return false;
} 
else if ((this.router.url == '/ai/ai-course')) {
  return false;
}


return true;
  }
}
