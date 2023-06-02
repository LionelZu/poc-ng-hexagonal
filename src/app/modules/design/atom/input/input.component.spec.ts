import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks'
import { InputComponent } from './input.component'

describe('InputComponent', () => {
  let fixture: MockedComponentFixture<InputComponent, InputComponent>
  let component: InputComponent
  beforeEach(() => MockBuilder(InputComponent))

  beforeEach(() => {
    fixture = MockRender(InputComponent)
    component = fixture.point.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
