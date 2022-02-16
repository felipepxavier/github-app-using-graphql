import { Story } from '@storybook/react';
import { Pagination, PaginationProps } from '.';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
);

Default.args = {
  totalReposities: 110,
  perPage: 10,
  callbackPageCurrent: (currentPage: number) => {
    console.log('currentPage =>', currentPage);
  },
};
