import { Story } from '@storybook/react';
import { Profile, ProfileProps } from '.';

export default {
  title: 'Profile',
  component: Profile,
};

export const Default: Story<ProfileProps> = (args) => (
  <div style={{ maxWidth: '55rem', margin: 'auto' }}>
    <Profile {...args} />
  </div>
);
Default.args = {
  userData: {
    avatar_url: 'https://avatars.githubusercontent.com/u/43517062?v=4',
    email: 'felipe@gmail.com',
    location: 'Denver, CO',
    name: 'Felipe Pedroso Xavier',
    username: 'felipepxavier',
    public_repos: 32,
    bio: 'Loren ipsun',
    followers: 15,
    following: 10,
  },
};
