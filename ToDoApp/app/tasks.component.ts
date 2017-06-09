// TASKS COMPONENT - displays a list of all tasks
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

import { TASKS } from './mock-data';
@Component({
    providers: [TaskService],
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
})

export class TasksComponent implements OnInit {
    // TASKS COMPONENT
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
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    done(task: Task): void { 
        this.taskService.finishTask(task.id, true)
        .then(() => {
           // this.tasks = this.tasks.filter(t => t !== task);
        });
    }

    undone(task: Task): void { 
        this.taskService.finishTask(task.id, false)
        .then(() => {
            // this.tasks = this.tasks.filter(t => t !== task);
        });
    }
    
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedTask.id]);
    }
    ngOnInit(): void { 
        this.getTasks();
    }
}