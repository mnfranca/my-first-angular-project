import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
