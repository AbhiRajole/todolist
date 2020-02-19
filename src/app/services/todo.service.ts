import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Todo } from '../model/Todo';
import { Observable } from 'rxjs';

const httpOptions =
{
  headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: string =
  'https://jsonplaceholder.typicode.com/posts';
  datalimit = '?_limit=10';
 
  constructor( private http:HttpClient) { }
 
  //get Todos
  getTodos():Observable<Todo[]>
  {
   return this.http.get<Todo[]>(`${this.todosUrl}${this.datalimit}`);
  }
  //toggle completed

  toggleCompleted(todo: Todo):Observable<any>
  {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  //delete todo
  deleteTodo(todo : Todo):Observable<Todo>
  {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
  //add Todo
  addTodo(todo:Todo):Observable<Todo> 
  {
    return this.http.post<Todo>(this.todosUrl , todo, httpOptions);
  }
}
