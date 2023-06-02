import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button [type]="type"><ng-content></ng-content></button> `,
  styles: [
    `
      button {
        padding: var(--padding-md, 8px);
      }

      :host.primary button {
        background-color: var(--primary-bg-color, #8acaff);
      }

      :host.secondary button {
        background-color: var(--secondary-bg-color, #a8faaf);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  type: 'button' | 'submit' = 'button'
}
