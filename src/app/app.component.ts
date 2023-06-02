import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-root',
  styles: [``],
  template: `<p>Hello World</p>
    <router-outlet></router-outlet> `,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
  title = 'example-project'
}
