import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

/**
 * This comoonent format a form field.
 */
@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule],
  template: `<label [for]="inputName">{{ label }} </label> <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        gap: var(--margin-md, 8px);
        justify-content: space-between;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent {
  /** The label to print nest input */
  @Input() label = 'Field label'

  /** The html name of the input */
  @Input() inputName = 'name of input'
}
