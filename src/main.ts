import { importProvidersFrom } from '@angular/core'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { AppComponent } from './app/app.component'
import { FirestoreTodoRepository } from './app/modules/todos/infrastructure/todo-firestore.repository'

const firebaseConfig = {
  apiKey: 'AIzaSyB_TmV-7tl2tsLY11T827OFCtrR0j1zQhg',

  authDomain: 'ng-poc-5132f.firebaseapp.com',

  projectId: 'ng-poc-5132f',

  storageBucket: 'ng-poc-5132f.appspot.com',

  messagingSenderId: '417319501506',

  appId: '1:417319501506:web:fd6ae6dc139ef5852c855b',
}

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
    importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    { provide: 'TODO_REPOSITORY', useClass: FirestoreTodoRepository },
  ],
})
