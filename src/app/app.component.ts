import { Component } from '@angular/core';
import { Task } from '../app/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  tasks : Task[]
  addTaskEventEmitter($event){
    console.log('Data recieved is ', $event);

  }
}
