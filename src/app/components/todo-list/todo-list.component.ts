import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  name: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  name: string = 'Lista de tarefas';
  tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  @ViewChild('todoName') todoInputRef: ElementRef<HTMLInputElement> = null!;

  ngOnInit() {
    this.loadTasks();
  }

  addTask(name: string) {
    if (name) {
      this.http
        .post('http://localhost:3000/tasks', { id: uuidv4, name })
        .toPromise()
        .then((response) => {
          console.log(response);
          this.loadTasks();
        })
        .catch((error) => {
          console.log(error);
        });
      this.todoInputRef.nativeElement.value = '';
    }
  }

  removeTask(id: String) {
    this.http
      .delete<any>(`http://localhost:3000/tasks/${id}`)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.loadTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadTasks() {
    this.http
      .get<Task[]>('http://localhost:3000/tasks')
      .toPromise()
      .then((response) => {
        this.tasks = response!;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
