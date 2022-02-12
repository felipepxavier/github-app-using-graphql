import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Card } from '.';

describe('<Card />', () => {
  it('should render the title', () => {
    const cardProps = {
      title: 'Pesquise um username',
    };
    renderWithTheme(
      <Card {...cardProps}>
        <span>children</span>
      </Card>
    );

    expect(screen.getByRole('heading', { name: /pesquise um username/i }));
  });

  it('should render children correctly', () => {
    const cardProps = {
      title: 'Pesquise um username',
    };
    renderWithTheme(
      <Card {...cardProps}>
        <span>children</span>
      </Card>
    );

    expect(screen.getByText('children')).toBeInTheDocument();
  });
});
