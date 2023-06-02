import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { AppComponent } from './app/app.component'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/todos', pathMatch: 'full' },
      {
        path: 'todos',
        pathMatch: 'prefix',
        loadChildren: () => import('./app/modules/todos/infrastructure/todos.routes').then(m => m.TODOS_ROUTES),
      },
    ]),
  ],
})
