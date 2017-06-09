import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

import { TASKS } from './mock-data';
@Component({
    providers: [TaskService],
    selector: 'finished-tasks',
    templateUrl: './finished-tasks.component.html',
    styleUrls: ['./finished-tasks.component.css'],
})

export class FinishedTasksComponent implements OnInit {
    // FINISHED TASKS COMPONENT gives a list of completed tasks
    tasks: Task[];
    selectedTask: Task;

    constructor(
        private router: Router,
        private taskService: TaskService
    ) { }

    onSelect(task: Task): void {
        this.selectedTask = task;
    }
    getTasks(): void {
        this.taskService.getTasks(false).then(tasks => this.tasks = tasks);
        //console.log("hello");
    }

    undone(task: Task): void { 
        this.taskService.finishTask(task.id, false)
        .then(() => {
            this.tasks = this.tasks.filter(t => t !== task);
        });
    }
    
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedTask.id]);
    }
    ngOnInit(): void { 
        this.getTasks();
    }
}