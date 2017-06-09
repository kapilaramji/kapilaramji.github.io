import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingTasksComponent } from './pending-tasks.component';
import { FinishedTasksComponent } from './finished-tasks.component';
import { EditTaskComponent } from './edit-task.component';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task.component';

const routes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent },
    { path: 'pending', component: PendingTasksComponent },
    { path: 'finished', component: FinishedTasksComponent },
    { path: 'task/:id', component: EditTaskComponent },
    { path: 'add', component:AddTaskComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }