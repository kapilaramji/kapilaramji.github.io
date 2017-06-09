import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {WebStorageModule, LocalStorageService} from "angular2-localstorage";

import { AppComponent } from './app.component';
import { FinishedTasksComponent } from './finished-tasks.component';
import { PendingTasksComponent } from './pending-tasks.component';
import { TaskDetailComponent } from './task-detail.component';
import { TasksComponent } from './tasks.component';
import { EditTaskComponent } from './edit-task.component';
import { AddTaskComponent } from './add-task.component';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    FinishedTasksComponent,
    PendingTasksComponent,
    TaskDetailComponent,
    TasksComponent,
    EditTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    TaskService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
