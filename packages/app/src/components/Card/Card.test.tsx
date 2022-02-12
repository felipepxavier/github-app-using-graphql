import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Card } from '.';

const makeSut = (
  title = 'Pesquise um username',
  children = <span>children</span>
) => {
  renderWithTheme(<Card title={title}>{children}</Card>);
};

describe('<Card />', () => {
  it('should render the title', () => {
    makeSut();

    expect(screen.getByRole('heading', { name: /pesquise um username/i }));
  });

  it('should render children correctly', () => {
    makeSut();

    expect(screen.getByText('children')).toBeInTheDocument();
  });
});
