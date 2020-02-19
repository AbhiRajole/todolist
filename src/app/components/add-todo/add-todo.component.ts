import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();
 
  title :string;
  body:string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    const todo ={
    
      title : this.title,
      body: this.body,
      completed : false
    }

    this.addTodo.emit(todo);
  }

}
