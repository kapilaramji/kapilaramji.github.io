// ADD TASK COMPONENT for adding a new task
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from './task';

import { TaskService } from './task.service';

@Component({
    selector: 'add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css'],
})

export class AddTaskComponent{
    constructor(
                private location: Location,
        private router: Router,
        private taskService: TaskService
    ) { }

    goBack(): void {
        this.location.back();
    }

    add(text: string, note: string): void {
    text = text.trim();
    note = note.trim();
    if (!text) { console.log("invalid text"); return; }
    if (!note) { note=""; }
    this.taskService.createTask(text, note).then(() => this.goBack());
    }
}