import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks'
import { FieldComponent } from './field.component'

describe('FieldComponent', () => {
  let fixture: MockedComponentFixture<FieldComponent, FieldComponent>
  let component: FieldComponent
  beforeEach(() => MockBuilder(FieldComponent))

  beforeEach(() => {
    fixture = MockRender(FieldComponent)
    component = fixture.point.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
