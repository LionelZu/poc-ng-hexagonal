import { CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { MockBuilder, MockRender } from 'ng-mocks'
import { AppComponent } from '../app.component'

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent).keep(RouterTestingModule).keep(CommonModule))

  it('should create the app', () => {
    const fixture = MockRender(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'example-project'`, () => {
    const fixture = MockRender(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('example-project')
  })

  it('should render title', () => {
    const fixture = MockRender(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('p')?.textContent).toContain('Hello world')
  })
})
