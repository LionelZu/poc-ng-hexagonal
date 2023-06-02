import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks'
import { CardComponent } from './card.component'

describe('CardComponent', () => {
  let fixture: MockedComponentFixture<CardComponent, CardComponent>
  let component: CardComponent
  beforeEach(() => MockBuilder(CardComponent))

  beforeEach(() => {
    fixture = MockRender(CardComponent)
    component = fixture.point.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
