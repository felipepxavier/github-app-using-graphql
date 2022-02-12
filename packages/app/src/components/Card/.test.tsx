import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Card } from '.';

describe('<Card />', () => {
  it('should render the title', () => {
    const cardProps = {
      title: 'Pesquise um username',
    };
    renderWithTheme(<Card {...cardProps} />);

    expect(screen.getByRole('heading', { name: /pesquise um username/i }));
  });
});
