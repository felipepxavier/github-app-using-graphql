import { fireEvent, screen } from '@testing-library/react';
import { Input } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<InputSearch />', () => {
  it('should render input correctly', () => {
    const onChangeMocked = jest.fn();
    renderWithTheme(<Input onChange={onChangeMocked} />);

    const inputDefault = screen.getByPlaceholderText(/digite o username/i);
    expect(inputDefault);
  });
  it('should call onChange function', () => {
    const onChangeMocked = jest.fn();
    renderWithTheme(<Input onChange={onChangeMocked} />);

    const inputDefault = screen.getByPlaceholderText(/digite o username/i);
    fireEvent.change(inputDefault, { target: { value: 'changing' } });
    expect(onChangeMocked).toHaveBeenCalledTimes(1);
  });

  it('should render placeholder correctly', () => {
    const onChangeMocked = jest.fn();
    const placeholderText = 'my placeholder';
    renderWithTheme(
      <Input onChange={onChangeMocked} placeholder={placeholderText} />
    );

    const inputDefault = screen.getByPlaceholderText(`${placeholderText}`);
    fireEvent.change(inputDefault, { target: { value: 'changing' } });
    expect(onChangeMocked).toHaveBeenCalledTimes(1);
  });
});
