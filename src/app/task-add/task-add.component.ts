import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  
  @Output() addTaskEventEmitter = new EventEmitter();
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
  
 }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskTittle: ["",[Validators.required]]
    })
 
}
// onKeyPress($event){

//   console.log(this.taskForm.value.taskTitle)
//   // if(this.taskForm.valid)
//   // {
//   //   alert('task entered')
//   // }
//   // else
//   // {
//   //   alert('enter required field');
//   // }
// }

onSubmit(){

  // console.log(this.taskForm.value);
  if(this.taskForm.valid)
  {
    alert('task entered')
    this.addTaskEventEmitter.emit(this.taskForm.value);
  }
  else if (this.taskForm.value.taskTittle <= 0)
  {
    alert('enter required field');
  }
}

}

