import { Story } from '@storybook/react';
import { Card, CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
};

export const Default: Story<CardProps> = (args) => <Card {...args} />;

Default.args = {
  title: 'My title',
};
