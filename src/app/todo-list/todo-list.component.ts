import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{ //implements OnInit {

  constructor() { }
  count:number = 4;

   toDo = ['EAT','SLEEP','CODE','REPEAT'];

  addTodo(newTodoLabel) {
    // var newTodo = {
    //   label: newTodoLabel
    // };
    this.toDo.push(newTodoLabel);
    this.count++;
  }
  
   //len = toDo.length;

  // ngOnInit(): void {
  // }

}
