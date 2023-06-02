import { Todo } from '../../models/todo'
import { TodoRepository } from '../todo.repository'

export type ViewTodoUsecaseCommande = {
  tag?: string
}

export class ViewTodoUsecase {
  constructor(private todoRepository: TodoRepository) {}

  handle(command: ViewTodoUsecaseCommande): Promise<Todo[]> {
    return this.todoRepository.find({ tag: command.tag })
  }
}
