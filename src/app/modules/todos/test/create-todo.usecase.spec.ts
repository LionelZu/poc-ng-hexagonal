import { todoFixture } from './todo.fixture'

describe('FEATURE - Add new todo', () => {
  beforeEach(() => {
    todoFixture.clear()
  })

  it('RULES - Should add a new todo', async () => {
    todoFixture.whenAddTodo({
      description: 'ma tâche de test',
    })

    await todoFixture.thenTodoExistWith({
      description: 'ma tâche de test',
      done: false,
    })
  })

  it('RULES - Should return an error when description is longer than 250 character', () => {
    todoFixture.whenAddTodo({
      description: `Recusandae illo ea quia quos. Earum non unde expedita. Ducimus
      quia sit quo iusto. Laborum maiores omnis vel ad ullam. Et sint dignissimos maxime
      dolorem autem occaecati corporis iusto.
      Recusandae illo ea quia quos. Earum non unde expedita. Ducimus quia sit quo iusto.
      Laborum maiores omnis vel ad ullam. Et sint dignissimos maxime dolorem autem
      occaecati corporis iusto.`,
    })

    todoFixture.thenThrowsTooLongError()
  })

  it('RULES - Should create todo with 2 tags ', async () => {
    todoFixture.whenAddTodo({
      description: 'ma tâche de test',
      tags: ['tags1', 'tags2'],
    })

    await todoFixture.thenTodoExistWith({
      description: 'ma tâche de test',
      done: false,
      tags: ['tags1', 'tags2'],
    })
  })

  it('RULES - Should return an error when create a todo with 3 tags ', async () => {
    todoFixture.whenAddTodo({
      description: 'ma tâche de test',
      tags: ['tags1', 'tags2', 'tags3'],
    })

    await todoFixture.thenThrowsTooMoreTagsError()
  })
})
