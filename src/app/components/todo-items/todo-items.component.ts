import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {}

  //set dynamic classes
  setClasses()
  {
    let classes= 
    {
      todo : false,
      'is-complete': this.todo.completed

    }
    return classes;
  }

  onToggle(todo :any)
  {
    //toggle on UI
    todo.completed =!todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
    
  }
  onDelete(todo :any)
  {
   this.deleteTodo.emit(todo);
  }
}
