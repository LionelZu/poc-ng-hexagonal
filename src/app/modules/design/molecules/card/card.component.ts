import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content"><ng-content select="[card-content]"></ng-content></div>
    <div class="actions"><ng-content select="[card-actions]"></ng-content></div>
  `,
  styles: [
    `
      :host {
        display: flex;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        background-color: var(--main-bg-color, white);
        padding: var(--padding-md, 8px) var(--padding-lg, 12px);
        gap: var(--margin-md, 8px);

        .content {
          flex: 1;
        }

        .actions:empty {
          display: none;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
