import { Todo } from '../models/todo'

export interface TodoRepository {
  save(todo: Todo): Promise<void>
  find(filter: { tag?: string }): Promise<Todo[]>
}
