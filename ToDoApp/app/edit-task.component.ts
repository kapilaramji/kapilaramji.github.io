// EDIT TASK
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { TaskService } from './task.service';

import { Task } from './task';

@Component({
  selector: 'edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {
    task: Task;

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
        
    save(text: string, note: string): void {
        text = text.trim();
        note = note.trim();
        if (!text) {return;}
        this.task.text = text;
        this.task.note = note;
        this.taskService.updateTask(this.task).then(() => this.goBack());
    }

    ngOnInit(): void {
        // get id from url and get the task from Task Service
        this.route.params
        .switchMap((params: Params) => 
        this.taskService.getTask(+params['id']))
        .subscribe(task => this.task = task);
    }
}
