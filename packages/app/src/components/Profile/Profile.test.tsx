import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Profile } from '.';

describe('<Profile />', () => {
  it('should render informations correctly', () => {
    const myInfo = {
      avatar_url: 'https://avatars.githubusercontent.com/u/43517062?v=4',
      email: 'felipe@gmail.com',
      location: 'Denver, CO',
      name: 'Felipe Pedroso Xavier',
      username: 'felipepxavier',
      public_repos: 32,
      bio: 'Loren ipsun',
      followers: 15,
      following: 10,
    };
    renderWithTheme(<Profile userData={myInfo} />);

    const avatar = screen.getByRole('img');

    expect(avatar).toHaveAttribute('src', myInfo.avatar_url);
    expect(screen.getByText(myInfo.name)).toBeInTheDocument();
    expect(screen.getByText(myInfo.email)).toBeInTheDocument();
    expect(screen.getByText(myInfo.location)).toBeInTheDocument();
  });
});
