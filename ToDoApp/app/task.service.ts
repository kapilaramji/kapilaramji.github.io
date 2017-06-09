// TASK SERVICE is responsible for retreiving task data as well as performing CRUD operations
import { Injectable } from '@angular/core';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

import { Task } from './task';

import { TASKS } from './mock-data';

@Injectable()
export class TaskService {
    TASK_LIST: Task[] = TASKS;
    task: Task;

    getTask(id: number): Promise<Task> {
        return Promise.resolve(this.TASK_LIST.find(task => task.id === id));
    }

    getTasks(done?: boolean): Promise<Task[]> {
        console.log(this.TASK_LIST);
        if (done != null) {
            return Promise.resolve(this.TASK_LIST.filter(task => task.done !== done));
        }
        else
            return Promise.resolve(this.TASK_LIST);
    }

    createTask(text: string, note: string): Promise<Task> {
        this.task = new Task;
        this.task.id = this.getNewId();
        this.task.text = text;
        this.task.note = note;
        this.task.done = false;
        this.TASK_LIST.push(this.task);
        console.log(this.task);
        return Promise.resolve(this.task);
    }

    // used to mark a function as done or not done
    finishTask(id: number, done: boolean): Promise<Task> {
        this.task = this.TASK_LIST.find(task => task.id === id);
        this.task.done = done;
        return Promise.resolve(this.task);
    }

    deleteTask(id: number): Promise<Task> {
        console.log("del2");
        this.task = this.TASK_LIST.find(task => task.id === id);
        this.TASK_LIST = this.TASK_LIST.filter(t => t.id !== id);
        console.log(this.TASK_LIST);
        return Promise.resolve(this.task);
    }

    updateTask(task: Task): Promise<Task> {
        this.task = this.TASK_LIST.find(t => t.id === task.id);
        this.task.text = task.text;
        this.task.note = task.note;
        return Promise.resolve(this.task);
    }

    getNewId(): number {
        if (!this.TASK_LIST) { return 0; }
        let newId = -1;  
            this.TASK_LIST.forEach(t => {
                if (t.id > newId) {
                    newId = t.id + 1;
                }
            })
        return newId;
    }
}
