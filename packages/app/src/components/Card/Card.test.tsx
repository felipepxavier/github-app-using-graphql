import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { Card } from '.';
import { Link } from 'react-router-dom';

type makeSutProps = {
  title?: string;
  children?: JSX.Element;
  iconTitle?: JSX.Element;
  linkTitle?: JSX.Element;
};
const makeSut = (
  {
    title = 'Pesquise um username',
    children = <span>children</span>,
    iconTitle,
    linkTitle,
  }: makeSutProps = {
    title: 'Pesquise um username',
    children: <span>children</span>,
  }
) => {
  renderWithTheme(
    <Card title={title} iconTitle={iconTitle} linkTitle={linkTitle}>
      {children}
    </Card>
  );
};

describe('<Card />', () => {
  it('should render the title', () => {
    makeSut();

    expect(screen.getByRole('heading', { name: /pesquise um username/i }));
  });

  it('should render children correctly', () => {
    makeSut();

    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should render icon of title if existing', () => {
    makeSut({
      iconTitle: <FaGithub data-testid="icon" />,
    });

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render link if existing', () => {
    makeSut({
      iconTitle: <FaGithub data-testid="icon" />,
      linkTitle: (
        <Link to={'/'} data-testid="link">
          <MdKeyboardArrowLeft />
        </Link>
      ),
    });

    expect(screen.getByTestId('link')).toBeInTheDocument();
  });
});
