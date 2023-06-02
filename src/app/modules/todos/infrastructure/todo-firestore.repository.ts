import { Injectable } from '@angular/core'
import { DocumentData, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore'
import { firstValueFrom } from 'rxjs'
import { TodoRepository } from '../application/todo.repository'
import { Todo } from '../models/todo'

@Injectable({
  providedIn: 'root',
})
export class FirestoreTodoRepository implements TodoRepository {
  constructor(private firestore: Firestore) {}

  private readonly todosCollections = collection(this.firestore, 'todos')

  async save(todo: Todo): Promise<void> {
    await addDoc(this.todosCollections, {
      description: todo.description,
      done: todo.done || false,
      tags: todo.tags || [],
    })
  }

  async find(filter: { tag?: string | undefined }): Promise<Todo[]> {
    const data: DocumentData[] = await firstValueFrom(collectionData(this.todosCollections))
    return data
      .filter(d => !filter?.tag || d['tags'].include(filter.tag))
      .map(
        d =>
          ({
            description: d['description'],
            done: d['done'] || false,
            tags: d['tags'] || [],
          } as Todo)
      )
  }
}
