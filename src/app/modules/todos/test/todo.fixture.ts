import { TooLongError, TooMoreTagsError } from '../application/errors'
import { CreateTodoCommande, CreateTodoUseCase } from '../application/usecase/create-todo.usecase'
import { ViewTodoUsecase, ViewTodoUsecaseCommande } from '../application/usecase/view-todo.usecase'
import { Todo } from '../models/todo'
import { InMemoryTodoRepository } from './todo-inmemory.repository'

class TodoFixture {
  private error: unknown | undefined
  private todos: Todo[] = []
  private todoResository = new InMemoryTodoRepository()
  private createTodoUseCase = new CreateTodoUseCase(this.todoResository)
  private viewTodoUseCase = new ViewTodoUsecase(this.todoResository)

  whenAddTodo(commande: CreateTodoCommande) {
    try {
      this.createTodoUseCase.handle(commande)
    } catch (error: unknown) {
      this.error = error
    }
  }

  async whenViewTodo(commande: ViewTodoUsecaseCommande) {
    this.todos = await this.viewTodoUseCase.handle(commande)
  }

  givenTodo(todos: Todo[]) {
    todos.forEach(todo => this.todoResository.save(todo))
  }

  clear() {
    this.todoResository.clear()
  }

  async expectTodosFoundHaveLength(length: number) {
    expect(this.todos.length).toEqual(length)
  }

  async expectTodosFoundContain(expectedTodo: Todo) {
    const todo = this.todos.find(t => t.description === expectedTodo.description)
    expect(todo).toEqual(expectedTodo)
  }

  async thenTodoExistWith(expectedTodo: Todo) {
    const savedTodo = await this.todoResository.find({})
    const todo: Todo | undefined = savedTodo.find(t => t.description === expectedTodo.description)
    expect(todo).toEqual(expectedTodo)
  }

  thenThrowsTooLongError() {
    expect(this.error?.constructor.name).toBe(TooLongError.name)
  }

  thenThrowsTooMoreTagsError() {
    expect(this.error?.constructor.name).toBe(TooMoreTagsError.name)
  }
}

export const todoFixture = new TodoFixture()
