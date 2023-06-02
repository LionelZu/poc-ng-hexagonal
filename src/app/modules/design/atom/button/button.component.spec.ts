import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks'
import { ButtonComponent } from './button.component'

describe('ButtonComponent', () => {
  let fixture: MockedComponentFixture<ButtonComponent, ButtonComponent>
  let component: ButtonComponent
  beforeEach(() => MockBuilder(ButtonComponent))

  beforeEach(() => {
    fixture = MockRender(ButtonComponent)
    component = fixture.point.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
