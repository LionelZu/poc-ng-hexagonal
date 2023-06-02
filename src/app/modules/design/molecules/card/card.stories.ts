import type { Meta, StoryObj } from '@storybook/angular'
import { CardComponent } from './card.component'

const meta: Meta<CardComponent> = {
  title: 'molecules/Card',
  component: CardComponent,
}

export default meta
type Story = StoryObj<CardComponent>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/angular/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => ({
    template: `
    <app-card>
      <div card-content>Mon contenu</div>
      <div card-actions>Mes actions</div>
    </app-card>`,
    props: {},
  }),
}

export const WithoutActions: Story = {
  render: () => ({
    template: `
    <app-card>
      <div card-content>Mon contenu</div>
    </app-card>`,
    props: {},
  }),
}
