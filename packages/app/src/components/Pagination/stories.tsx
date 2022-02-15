import { Story } from '@storybook/react';
import { Pagination } from '.';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const Default: Story = (args) => <Pagination {...args} />;
