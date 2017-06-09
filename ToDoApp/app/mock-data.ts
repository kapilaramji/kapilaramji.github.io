// some mock data for testing purposes. 
// this will be unncessary after persistant storage

import { Task } from './task';

export var TASKS: Task[] = [
    { id: 1, text: 'Wash the stones in the backyard', note: "", done: true},
    { id: 2, text: 'Count the sheep', note: "Oh my! This one has a note!", done: false},
    { id: 3, text: 'Paint the dog black', note: "", done: true},
    { id: 4, text: 'Fluff the pillows', note: "Oh my! This one has a note!", done: false},
    { id: 5, text: "Enrage the neighbour's dogs", note: "Oh my! This one has a note!", done: true},
    { id: 6, text: 'Count the sheep, again', note: "", done: false},
    { id: 7, text: 'Play with the yordle', note: "", done: false}
];