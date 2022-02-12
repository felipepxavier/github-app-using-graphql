import { Story } from '@storybook/react';
import { InputProps, Input } from '.';

export default {
  title: 'Input',
  component: Input,
};

export const Default: Story<InputProps> = (args) => <Input {...args} />;
