import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonComponent } from './button.component'

const meta: Meta<ButtonComponent> = {
  title: 'atom/Button',
  component: ButtonComponent,
}

export default meta
type Story = StoryObj<ButtonComponent>

export const Primary: Story = {
  render: () => ({
    template: `<app-button class="primary">Mon bouton</app-button>`,
    props: {},
  }),
}

export const Secondary: Story = {
  render: () => ({
    template: `<app-button class="secondary">Mon bouton</app-button>`,
    props: {},
  }),
}
