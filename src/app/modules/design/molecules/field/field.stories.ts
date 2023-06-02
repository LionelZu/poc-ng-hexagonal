import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular'
import { InputComponent } from '../../atom/input/input.component'
import { FieldComponent } from './field.component'

const meta: Meta<FieldComponent> = {
  title: 'molecules/Field',
  component: FieldComponent,
  decorators: [
    moduleMetadata({
      imports: [InputComponent],
    }),
  ],
}

export default meta
type Story = StoryObj<FieldComponent>

export const Default: Story = {
  render: () => ({
    template: `
    <app-field [inputName]="inputName" [label]="label" style="width: 300px;">
      <app-input [inputName]="inputName"></app-input>
    </app-field>`,
    props: { inputName: 'input-1', label: 'Mon label' },
  }),
}
