import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { CardComponent } from 'src/app/modules/design/molecules/card/card.component'
import { CreateTodoUseCase } from '../../application/usecase/create-todo.usecase'
import { ViewTodoUsecase } from '../../application/usecase/view-todo.usecase'
import { Todo } from '../../models/todo'

@Component({
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: ` <app-card *ngFor="let todo of todos">
    <div card-content>{{ todo.description }}</div>
  </app-card>`,
  styles: [],
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = []

  constructor(private viewTodo: ViewTodoUsecase, private createTodo: CreateTodoUseCase) {}

  async ngOnInit(): Promise<void> {
    this.todos = await this.viewTodo.handle({})
  }
}
