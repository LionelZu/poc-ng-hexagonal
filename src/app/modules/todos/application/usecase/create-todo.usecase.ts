import { Inject, Injectable } from '@angular/core'
import { TooLongError, TooMoreTagsError } from '../errors'
import { TodoRepository } from '../todo.repository'

export type CreateTodoCommande = {
  description: string
  tags?: string[]
}

@Injectable({
  providedIn: 'root',
})
export class CreateTodoUseCase {
  constructor(@Inject('TODO_REPOSITORY') private todoRepository: TodoRepository) {}

  static readonly MAX_DESCRIPTION_LENGTH = 250
  static readonly MAX_TAGS = 3

  handle(command: CreateTodoCommande) {
    if (command.description.length > CreateTodoUseCase.MAX_DESCRIPTION_LENGTH) {
      throw new TooLongError()
    }
    if ((command.tags?.length || 0) >= CreateTodoUseCase.MAX_TAGS) {
      throw new TooMoreTagsError()
    }

    this.todoRepository.save({ description: command.description, done: false, tags: command.tags })
  }
}
