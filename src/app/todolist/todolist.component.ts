import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{ 
  Constructor() {}

   taskArray=[{taskName:"Brush teeth", isCompleted: false}, {taskName:"bathing",isCompleted: true}];
  ngOnInit() :void {}
  onSubmit(form: NgForm) {
     console.log(form);
     this.taskArray.push({
     taskName: form.controls['task'].value,
     isCompleted: false
     });
     form.resetForm();
  }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index,1);
  }
  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted;
  }

}
