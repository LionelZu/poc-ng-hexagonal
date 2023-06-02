import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

/**
 * Text input component.
 */
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: ` <input [type]="type" [name]="inputName" /> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  static id = 0

  @Input() type: 'text' | 'password' | 'number' = 'text'
  @Input() inputName = `input-${InputComponent.id++}`
}
