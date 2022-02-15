import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';
import { Pagination } from '.';

describe('<Pagination />', () => {
  it('should render navigation buttons correctly', () => {
    renderWithTheme(<Pagination totalReposities={110} perPage={10} />);

    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should calculate page quantity', () => {
    renderWithTheme(<Pagination totalReposities={110} perPage={10} />);

    expect(screen.getByText('Pág. 1 de 11')).toBeInTheDocument();
  });
});
