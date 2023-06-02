import { Injectable } from '@angular/core'
import { TodoRepository } from '../application/todo.repository'
import { Todo } from '../models/todo'

@Injectable({
  providedIn: 'root',
})
export class InMemoryTodoRepository implements TodoRepository {
  private todos: Todo[] = []

  get(): Promise<Todo | undefined> {
    return Promise.resolve(this.todos[this.todos.length - 1])
  }

  save(todo: Todo): Promise<void> {
    this.todos.push(todo)
    return Promise.resolve()
  }

  find(filter: { tag?: string | undefined }): Promise<Todo[]> {
    return Promise.resolve(this.todos.filter(t => (filter && filter.tag ? t.tags?.includes(filter.tag) : true)))
  }

  clear() {
    this.todos = []
  }
}
