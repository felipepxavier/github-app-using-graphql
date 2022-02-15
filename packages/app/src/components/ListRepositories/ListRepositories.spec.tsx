import { screen } from '@testing-library/react';
import { ListRepositories } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<ListRepositories />', () => {
  it('should render correctly', () => {
    const list = [
      {
        description: 'Apple Music web player',
        language: { name: 'TypeScript', color: '#0076c6' },
        name: 'apple-music-web-player',
        visibility: 'public',
      },
      {
        description:
          'Plugin for artillery.io that signs HTTP requests using the AWS Signature V4 specification.',
        language: { name: 'Não cadastrado', color: '#d2691e' },
        name: 'artillery-plugin-aws-sigv4',
        visibility: 'public',
      },
    ];
    renderWithTheme(<ListRepositories listData={list} />);

    expect(screen.getByText(list[0].name)).toBeInTheDocument();
    expect(screen.getByText(list[1].name)).toBeInTheDocument();
    expect(screen.getByText(list[0].language.name)).toBeInTheDocument();
    expect(screen.getByText(list[1].language.name)).toBeInTheDocument();
  });

  it('should render more info button', () => {
    const list = [
      {
        description: 'Apple Music web player',
        language: { name: 'TypeScript', color: '#0076c6' },
        name: 'apple-music-web-player',
        visibility: 'public',
      },
      {
        description:
          'Plugin for artillery.io that signs HTTP requests using the AWS Signature V4 specification.',
        language: { name: 'Não cadastrado', color: '#d2691e' },
        name: 'artillery-plugin-aws-sigv4',
        visibility: 'public',
      },
    ];
    const { container } = renderWithTheme(<ListRepositories listData={list} />);

    const buttonSvg = container.querySelector('svg');
    expect(buttonSvg).toBeInTheDocument();
  });
});
