import { Story } from '@storybook/react';
import { ListProps, ListRepositories } from '.';

export default {
  title: 'ListRepositories',
  component: ListRepositories,
};

export const Default: Story<ListProps> = (args) => (
  <div style={{ maxWidth: '55rem', margin: 'auto' }}>
    <ListRepositories {...args} />
  </div>
);

Default.args = {
  listData: [
    {
      description: 'Apple Music web player',
      language: { name: 'TypeScript', color: '#0076c6' },
      name: 'apple-music-web-player',
      visibility: 'public',
      url: 'http://github.com/myrepos',
    },
    {
      description:
        'Plugin for artillery.io that signs HTTP requests using the AWS Signature V4 specification.',
      language: { name: 'Não cadastrado', color: '#d2691e' },
      name: 'artillery-plugin-aws-sigv4',
      visibility: 'public',
      url: 'http://github.com/myrepos',
    },
  ],
};
