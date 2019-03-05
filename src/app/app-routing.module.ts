import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { BecomeaninstructorComponent } from './becomeaninstructor/becomeaninstructor.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { BuisnessComponent } from './buisness/buisness.component';
import { MedicalComponent } from './medical/medical.component';
import { NetworksecurityComponent } from './networksecurity/networksecurity.component';
import { ComputerscienceComponent } from './computerscience/computerscience.component';
import { WebdesigningComponent } from './webdesigning/webdesigning.component';
import { HardwareComponent } from './hardware/hardware.component';
import { DevelopmentComponent } from './development/development.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AddcoursesComponent } from './admin/addcourses/addcourses.component';
import { VideoCenterComponent } from './admin/addcourses/video-center/video-center.component';
import { AiComponent } from './ai/ai.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { MeanComponent } from './mean/mean.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ResearchComponent } from './research/research.component';
import { AerospaceComponent } from './aerospace/aerospace.component';
import { FashionComponent } from './fashion/fashion.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { MarineComponent } from './marine/marine.component';
import { BiologyComponent } from './biology/biology.component';
import { CivilComponent } from './civil/civil.component';
import { CookingComponent } from './cooking/cooking.component';
import { ManageInstructorComponent } from './manage-instructor/manage-instructor.component';
import { AiCourseComponent } from './ai-course/ai-course.component';
import { PythonComponent } from './python/python.component';


import{Routes , RouterModule} from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component : HomeComponent},
  {path:'courses', component :CoursesComponent},
  {path:'becomeaninstructor', component :  BecomeaninstructorComponent},
  {path:'contactus', component : ContactusComponent},
  {path:'blogs', component : BlogsComponent},
  {path:'login', component : LoginComponent},
  {path:'engineering', component : EngineeringComponent},
  {path:'buisness', component : BuisnessComponent},
  {path:'medical', component : MedicalComponent},
  {path:'networksecurity', component : NetworksecurityComponent},
  {path:'computerscience', component : ComputerscienceComponent},
  {path:'webdesigning', component : WebdesigningComponent},
  {path:'hardware', component : HardwareComponent},
  {path:'development', component :  DevelopmentComponent },
  {path:'admin', component :  AdminComponent },
  {path:'admin/addcourses', component :  AddcoursesComponent },
  {path:'admin/addcourses/videos', component :  VideoCenterComponent },
  {path:'ai', component :  AiComponent },
  {path:'blockchain', component :  BlockchainComponent },
  {path:'mean', component :  MeanComponent },
  {path:'statistics', component :  StatisticsComponent },
  {path:'aerospace', component :AerospaceComponent },
  {path:'fashion', component :  FashionComponent },
  {path:'agriculture', component :  AgricultureComponent },
  {path:'marine', component :  MarineComponent },
  {path:'civil', component :  CivilComponent },
  {path:'cooking', component :  CookingComponent },
  {path:'biology', component :  BiologyComponent },
  {path:'research', component :  ResearchComponent },
  {path:'admin/manageinstructor', component :  ManageInstructorComponent },
  {path:'ai/ai-course', component :  AiCourseComponent },
  {path:'development/python', component :  PythonComponent },

  
]
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)],
    exports:[RouterModule]
  
  })
  export class AppRoutingModule {}
  export const routingComponents =[
    HomeComponent,
    CoursesComponent, 
    BecomeaninstructorComponent,
    BlogsComponent,
    ContactusComponent,
    RegisterComponent,
    LoginComponent,
    EngineeringComponent,
    BuisnessComponent,
    MedicalComponent,
    NetworksecurityComponent,
    ComputerscienceComponent,
    WebdesigningComponent,
    HardwareComponent,
    DevelopmentComponent ,
    AdminComponent ,
    AddcoursesComponent,
    AiComponent,BlockchainComponent,
    MeanComponent,
    StatisticsComponent,
    ResearchComponent,
    AerospaceComponent,
    FashionComponent,
    AgricultureComponent,
    MarineComponent,
    BiologyComponent,
    CivilComponent,
    CookingComponent,
    ManageInstructorComponent,
    AiCourseComponent,
    PythonComponent
  ]