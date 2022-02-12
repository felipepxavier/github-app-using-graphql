import { Story } from '@storybook/react';
import { InputSearch } from '.';

export default {
  title: 'InputSearch',
  component: InputSearch,
};

export const Default: Story = (args) => <InputSearch {...args} />;
