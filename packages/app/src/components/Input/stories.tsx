import { Story } from '@storybook/react';
import { InputProps, Input } from '.';

export default {
  title: 'Input',
  component: Input,
};

export const Default: Story<InputProps> = (args) => <Input {...args} />;
Default.args = {
  placeholder: 'my placeholder',
};

export const WithButton: Story<InputProps> = (args) => <Input {...args} />;

WithButton.args = {
  placeholder: 'my placeholder',
  callbackOnClickButton: () => ({}),
};
