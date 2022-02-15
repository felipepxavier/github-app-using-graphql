import { renderWithTheme } from 'utils/tests/helpers';
import { fireEvent, screen } from '@testing-library/react';
import { Pagination } from '.';

describe('<Pagination />', () => {
  it('should render navigation buttons correctly', () => {
    renderWithTheme(
      <Pagination
        totalReposities={110}
        perPage={10}
        callbackPageCurrent={jest.fn()}
      />
    );

    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should calculate page quantity', () => {
    renderWithTheme(
      <Pagination
        totalReposities={110}
        perPage={10}
        callbackPageCurrent={jest.fn()}
      />
    );

    expect(screen.getByText('Pág. 1 de 11')).toBeInTheDocument();
  });

  it('should change current page (next)', () => {
    renderWithTheme(
      <Pagination
        totalReposities={110}
        perPage={10}
        callbackPageCurrent={jest.fn()}
      />
    );
    const nextButton = screen.getByRole('button', { name: 'Próxima página' });
    fireEvent.click(nextButton);

    expect(screen.getByText('Pág. 2 de 11')).toBeInTheDocument();
  });

  it('should change current page (previous)', () => {
    renderWithTheme(
      <Pagination
        totalReposities={110}
        perPage={10}
        callbackPageCurrent={jest.fn()}
      />
    );
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

  it('should not change current page if not exists (previous)', () => {
    renderWithTheme(
      <Pagination
        totalReposities={110}
        perPage={10}
        callbackPageCurrent={jest.fn()}
      />
    );
    const previousButton = screen.getByRole('button', {
      name: 'Página anterior',
    });

    fireEvent.click(previousButton);
    expect(screen.getByText('Pág. 1 de 11')).toBeInTheDocument();
  });

  it('should not change current page if is equal to total pages', () => {
    renderWithTheme(
      <Pagination
        totalReposities={6}
        perPage={3}
        callbackPageCurrent={jest.fn()}
      />
    );
    const nextButton = screen.getByRole('button', { name: 'Próxima página' });

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(screen.getByText('Pág. 2 de 2')).toBeInTheDocument();
  });

  it('should call callback function if change current page', () => {
    const callbackPageCurrentMocked = jest.fn();

    renderWithTheme(
      <Pagination
        totalReposities={6}
        perPage={3}
        callbackPageCurrent={callbackPageCurrentMocked}
      />
    );
    const nextButton = screen.getByRole('button', { name: 'Próxima página' });
    fireEvent.click(nextButton);

    expect(callbackPageCurrentMocked).toHaveBeenCalledTimes(1);
  });

  it('should calculate quantity of page and round the result', () => {
    renderWithTheme(
      <Pagination
        totalReposities={7}
        perPage={10}
        callbackPageCurrent={jest.fn()}
      />
    );

    expect(screen.getByText('Pág. 1 de 1')).toBeInTheDocument();
  });
});
