import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SectionsModule } from 'src/app/sections/sections.module';
import { PostsComponent } from 'src/app/pages/posts/posts.component';
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SectionsModule,
    MatSidenavModule
  ]
})
export class MainModule { }
