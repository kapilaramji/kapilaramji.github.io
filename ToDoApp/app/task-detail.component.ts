// TASK DETAIL COMPONENT gives a detailed view of a single task
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from './task.service';

import { Task } from './task';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css'],
})

export class TaskDetailComponent{
    constructor(private router: Router, private taskService: TaskService) { }
  
    @Input() task: Task;

    gotoEdit(): void {
        this.router.navigate(['/task', this.task.id]);
    }

    delete(): void {
        console.log("del");
        this.taskService.deleteTask(this.task.id);
    }
}