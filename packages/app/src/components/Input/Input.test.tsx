import { fireEvent, screen } from '@testing-library/react';
import { Input } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

const makeSut = ({
  placeholder = 'digite o username',
  onChange = jest.fn(),
  isSearch = false,
} = {}) => {
  renderWithTheme(
    <Input onChange={onChange} placeholder={placeholder} isSearch={isSearch} />
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

  it('should render button inside input if property isSearch is true', () => {
    makeSut({ isSearch: true });

    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i });
    expect(buttonSearch).toBeInTheDocument();
  });

  it('should call callbackOnClickButton if property isSearch is true', () => {
    const callbackOnClickButtonMocked = jest.fn();
    makeSut({
      isSearch: true,
      callbackOnClickButton: callbackOnClickButtonMocked,
    });

    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i });
    expect(buttonSearch).toBeInTheDocument();
  });
});
