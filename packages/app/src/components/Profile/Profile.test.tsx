import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Profile } from '.';

describe('<Profile />', () => {
  it('should render informations correctly', () => {
    const myInfo = {
      avatar_url: 'https://avatars.githubusercontent.com/u/420001?v=4',
      email: 'felipe@gmail.com',
      location: 'Denver, CO',
      name: 'Felipe Oduardo Sierra',
    };
    renderWithTheme(<Profile userData={myInfo} />);

    const avatar = screen.getByRole('img');

    expect(avatar).toHaveAttribute('src', myInfo.avatar_url);
    expect(screen.getByText(myInfo.name)).toBeInTheDocument();
    expect(screen.getByText(myInfo.email)).toBeInTheDocument();
    expect(screen.getByText(myInfo.location)).toBeInTheDocument();
  });
});
