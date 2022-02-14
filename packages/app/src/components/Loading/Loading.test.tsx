import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Loading } from '.';

describe('<Loading />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Loading />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
