import { Story } from '@storybook/react';
import { FaGithub } from 'react-icons/fa';
import { Card, CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
};

export const Default: Story<CardProps> = (args) => <Card {...args} />;

Default.args = {
  title: 'My title',
  children: <span>children</span>,
};

export const WithIcon: Story<CardProps> = (args) => <Card {...args} />;

WithIcon.args = {
  title: 'My title',
  children: <span>children</span>,
  iconTitle: <FaGithub size={22} />,
};
