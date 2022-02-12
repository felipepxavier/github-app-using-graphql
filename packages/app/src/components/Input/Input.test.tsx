import { fireEvent, screen } from '@testing-library/react';
import { Input, InputProps } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

const makeSut = ({
  placeholder = 'digite o username',
  onChange = jest.fn(),
  callbackOnClickButton = undefined,
}: InputProps = {}) => {
  renderWithTheme(
    <Input
      onChange={onChange}
      placeholder={placeholder}
      callbackOnClickButton={callbackOnClickButton}
    />
  );
};

describe('<Input />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render input correctly', () => {
    makeSut();

    const inputDefault = screen.getByPlaceholderText(/digite o username/i);
    expect(inputDefault);
  });
  it('should call onChange function', () => {
    const onChangeMocked = jest.fn();
    makeSut({ onChange: onChangeMocked });

    const inputDefault = screen.getByPlaceholderText(/digite o username/i);
    fireEvent.change(inputDefault, { target: { value: 'changing' } });
    expect(onChangeMocked).toHaveBeenCalledTimes(1);
  });

  it('should render placeholder correctly', () => {
    const placeholderText = 'my placeholder';

    makeSut({ placeholder: placeholderText });

    const inputDefault = screen.getByPlaceholderText(`${placeholderText}`);
    expect(inputDefault).toBeInTheDocument();
  });

  it('should render button inside input if property callbackOnClickButton is existing', () => {
    makeSut({ callbackOnClickButton: jest.fn() });

    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i });
    expect(buttonSearch).toBeInTheDocument();
  });

  it('should call callbackOnClickButton if property callbackOnClickButton is existing', () => {
    const callbackOnClickButtonMocked = jest.fn();
    makeSut({
      callbackOnClickButton: callbackOnClickButtonMocked,
    });

    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i });
    fireEvent.click(buttonSearch);

    expect(callbackOnClickButtonMocked).toHaveBeenCalledTimes(1);
  });

  it('should call callbackOnClickButton with correctly value', () => {
    const callbackOnClickButtonMocked = jest.fn();
    makeSut({
      callbackOnClickButton: callbackOnClickButtonMocked,
    });

    const currentValue = 'valueMocked';

    const inputDefault = screen.getByPlaceholderText(/digite o username/i);
    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i });

    fireEvent.change(inputDefault, { target: { value: `${currentValue}` } });
    fireEvent.click(buttonSearch);

    expect(callbackOnClickButtonMocked).toHaveBeenCalledTimes(1);
    expect(callbackOnClickButtonMocked).toHaveBeenCalledWith(currentValue);
  });
});
