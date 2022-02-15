import { Story } from '@storybook/react';
import { FaGithub } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
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

export const WithIconAndLink: Story<CardProps> = (args) => <Card {...args} />;

WithIconAndLink.args = {
  title: 'My title',
  children: <span>children</span>,
  iconTitle: <FaGithub size={22} />,
  linkTitle: (
    <Link to={'/'} data-testid="link">
      <MdKeyboardArrowLeft size={24} />
    </Link>
  ),
};
