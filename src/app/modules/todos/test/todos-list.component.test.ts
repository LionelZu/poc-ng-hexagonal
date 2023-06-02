import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks'
import { TodosListComponent } from './todos-list.component'

describe('TodosListComponent', () => {
  let fixture: MockedComponentFixture<TodosListComponent, TodosListComponent>
  let component: TodosListComponent
  beforeEach(() => MockBuilder(TodosListComponent))

  beforeEach(() => {
    fixture = MockRender(TodosListComponent)
    component = fixture.point.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
