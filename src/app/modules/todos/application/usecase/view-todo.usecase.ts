import { Inject, Injectable } from '@angular/core'
import { Todo } from '../../models/todo'
import { TodoRepository } from '../todo.repository'

export type ViewTodoUsecaseCommande = {
  tag?: string
}

@Injectable({
  providedIn: 'root',
})
export class ViewTodoUsecase {
  constructor(@Inject('TODO_REPOSITORY') private todoRepository: TodoRepository) {}

  handle(command: ViewTodoUsecaseCommande): Promise<Todo[]> {
    return this.todoRepository.find({ tag: command.tag })
  }
}
