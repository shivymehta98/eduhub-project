import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BecomeaninstructorComponent } from './becomeaninstructor/becomeaninstructor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { EngineeringComponent } from './engineering/engineering.component';
import { BuisnessComponent } from './buisness/buisness.component';
import { WComponent } from './s/w/w.component';
import { MedicalComponent } from './medical/medical.component';
import { NetworksecurityComponent } from './networksecurity/networksecurity.component';
import { ComputerscienceComponent } from './computerscience/computerscience.component';
import { WebdesigningComponent } from './webdesigning/webdesigning.component';
import { HardwareComponent } from './hardware/hardware.component';
import { DevelopmentComponent } from './development/development.component';
import { AdminComponent } from './admin/admin.component';
import { AddcoursesComponent } from './admin/addcourses/addcourses.component';
import { VideoListComponent } from './admin/addcourses/video-list/video-list.component';
import { VideoDetailComponent } from './admin/addcourses/video-detail/video-detail.component';
import { VideoCenterComponent } from './admin/addcourses/video-center/video-center.component';
import { SafePipe } from './safe.pipe';
import { Video } from './video';
import { PythonComponent } from './python/python.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { VideoService } from './video.service';
import { ManageInstructorComponent } from './manage-instructor/manage-instructor.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { AiCourseComponent } from './ai-course/ai-course.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    BlogsComponent,
    SafePipe,
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
    BecomeaninstructorComponent,
    LoginComponent,
    RegisterComponent,
    EngineeringComponent,
    BuisnessComponent,
    WComponent,
    MedicalComponent,
    NetworksecurityComponent,
    ComputerscienceComponent,
    WebdesigningComponent,
    HardwareComponent,
    DevelopmentComponent,
    AdminComponent,
    AddcoursesComponent,
    VideoListComponent,
    VideoDetailComponent,
    VideoCenterComponent,
    PythonComponent,
    AiComponent,
    BlockchainComponent,
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
 
    AiCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule ,
    ReactiveFormsModule,
    HttpClientModule,   CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    VgCoreModule,
    VgControlsModule // ToastrModule added
  ],
  // exports: [BrowserModule, ToastModule],
  providers: [UserService,VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
