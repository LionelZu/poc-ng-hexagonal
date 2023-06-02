import { Todo } from '../models/todo'
import { todoFixture } from './todo.fixture'

export class TodoBuilder {
  constructor(
    private description: string = 'Ma description',
    private done: boolean = false,
    private tags: string[] = []
  ) {}

  withDescription(description: string): TodoBuilder {
    this.description = description
    return this
  }

  withDone(done: boolean): TodoBuilder {
    this.done = done
    return this
  }

  withTags(tags: string[]): TodoBuilder {
    this.tags = tags
    return this
  }

  build(): Todo {
    return { description: this.description, done: this.done, tags: this.tags }
  }
}

describe('FEATURE - View todos', () => {
  beforeEach(() => {
    todoFixture.clear()
  })

  it('RULES - Should view all todos', async () => {
    todoFixture.givenTodo([
      new TodoBuilder().withDescription('Première tâche').build(),
      new TodoBuilder().withDescription('Seconde tâche').build(),
    ])

    await todoFixture.whenViewTodo({})

    await todoFixture.expectTodosFoundHaveLength(2)
    await todoFixture.expectTodosFoundContain({
      description: 'Première tâche',
      done: false,
      tags: [],
    })
    await todoFixture.expectTodosFoundContain({
      description: 'Seconde tâche',
      done: false,
      tags: [],
    })
  })

  it('RULES - Should view all todos with specific tags', async () => {
    todoFixture.givenTodo([
      new TodoBuilder().withDescription('Première tâche').build(),
      new TodoBuilder().withDescription('Seconde tâche').withTags(['selected']).build(),
    ])

    await todoFixture.whenViewTodo({
      tag: 'selected',
    })

    await todoFixture.expectTodosFoundHaveLength(1)
    await todoFixture.thenTodoExistWith({
      description: 'Seconde tâche',
      done: false,
      tags: ['selected'],
    })
  })
})
