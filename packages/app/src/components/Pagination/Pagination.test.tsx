import { renderWithTheme } from 'utils/tests/helpers';
import { fireEvent, screen } from '@testing-library/react';
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

  it('should change current page (next)', () => {
    renderWithTheme(<Pagination totalReposities={110} perPage={10} />);
    const nextButton = screen.getByRole('button', { name: 'Próxima página' });
    fireEvent.click(nextButton);

    expect(screen.getByText('Pág. 2 de 11')).toBeInTheDocument();
  });
  it('should change current page (previous)', () => {
    renderWithTheme(<Pagination totalReposities={110} perPage={10} />);
    const previousButton = screen.getByRole('button', {
      name: 'Página anterior',
    });
    const nextButton = screen.getByRole('button', { name: 'Próxima página' });
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(previousButton);

    expect(screen.getByText('Pág. 3 de 11')).toBeInTheDocument();
  });

  it('should not change current page if not exists', () => {
    renderWithTheme(<Pagination totalReposities={110} perPage={10} />);
    const previousButton = screen.getByRole('button', {
      name: 'Página anterior',
    });
    const nextButton = screen.getByRole('button', { name: 'Próxima página' });
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(previousButton);

    expect(screen.getByText('Pág. 3 de 11')).toBeInTheDocument();
  });
});
