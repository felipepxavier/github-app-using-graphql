import { fireEvent, screen } from '@testing-library/react';
import { InputSearch } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<InputSearch />', () => {
  it('should render input correctly', () => {
    renderWithTheme(<InputSearch />);

    const inputDefault = screen.getByPlaceholderText(/digite o username/i);
    expect(inputDefault);
  });
  it('should call onChange function', () => {
    const onChangeMocked = jest.fn();
    renderWithTheme(<InputSearch onChange={onChangeMocked} />);

    const inputDefault = screen.getByPlaceholderText(/digite o username/i);
    fireEvent.change(inputDefault, { target: { value: 'changing' } });
    expect(onChangeMocked).toHaveBeenCalledTimes(8);
  });
});
