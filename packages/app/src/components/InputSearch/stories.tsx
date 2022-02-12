import { Story } from '@storybook/react';
import { InputProps, InputSearch } from '.';

export default {
  title: 'InputSearch',
  component: InputSearch,
};

export const Default: Story<InputProps> = (args) => <InputSearch {...args} />;
