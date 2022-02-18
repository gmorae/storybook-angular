import { moduleMetadata } from '@storybook/angular';
import { ButtonProps } from 'projects/storybook/src/lib/components/button/button.interface';
import { ButtonModule } from 'projects/storybook/src/public-api';

export default {
  title: 'Components/Button',
  decorators: [
    moduleMetadata({
      imports: [ButtonModule]
    })
  ],
  parameters: {
    layout: 'centered',
    docs: {
      iframeHeight: 150,
    }
  },

  argTypes: {
    variant: {
      options: ['blue-100', 'blue-200', 'blue-300', 'blue-400', 'blue-500'],
      control: { type: 'select' },
    },
    loading: { 
      option: [true, false],
      control: { type: 'boolean'}
    }
  },

};

export const Default = (props: ButtonProps) => ({
  props,
  template: `
    <btn-button
      [label]="label"
      [variant]="variant"
      [loading]="loading"
      (onClick)="handleClick($event)"
    ></btn-button>
  `
});

Default.args = {
  label: "Hi, I'm button",
  variant: 'blue-300',
  loading: false,
  handleClick(event: any) {
    alert('onClick no botão ' + event)
  } 
}