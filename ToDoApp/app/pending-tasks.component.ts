import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

import { TASKS } from './mock-data';
@Component({
    providers: [TaskService],
    selector: 'pending-tasks',
    templateUrl: './pending-tasks.component.html',
    styleUrls: ['./pending-tasks.component.css'],
})

export class PendingTasksComponent implements OnInit {
    // PENDING TASKS COMPONENT gives a list of pending tasks
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
        this.taskService.getTasks(true).then(tasks => this.tasks = tasks);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedTask.id]);
    }

    updateTasks(task: Task): void {
        this.tasks = this.tasks.filter(t => t !== task);
        if (this.selectedTask === task) {this.selectedTask = null};
    }

    done(task: Task): void { 
        this.taskService.finishTask(task.id, true)
        .then(() => {
            this.updateTasks(task);}
        );
    }

    delete(task: Task): void { 
        this.taskService.deleteTask(task.id)
        .then(() => {
            this.updateTasks(task);}
        );
    }

    ngOnInit(): void { 
        this.getTasks();
    }
}