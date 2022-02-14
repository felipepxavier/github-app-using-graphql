import { Story } from '@storybook/react';
import { Loading } from '.';

export default {
  title: 'Loading',
  component: Loading,
};

export const Default: Story = (args) => <Loading {...args} />;
