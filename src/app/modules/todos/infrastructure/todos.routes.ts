import { Routes } from '@angular/router'
import { TodosListComponent } from '../page/todos-list/todos-list.component'

export const TODOS_ROUTES: Routes = [
  {
    component: TodosListComponent,
    path: '',
    pathMatch: 'full',
  },
]
