const api = require('../../services/api');
const { user } = require('./user');

jest.mock('../../services/api', () => ({
  get: jest.fn(),
}));

describe('user()', () => {
  it('should call correctly', async () => {
    const myInfo = {
      id: 10,
      name: 'Felipe Pedroso Xavier',
      location: 'Gravataí - RS',
      description: 'não informado',
      svn_url: 'myUrl',
      visibility: 'public',
      language: 'Javascript',
    };
    api.get.mockResolvedValue({
      data: myInfo,
    });

    const usrData = await user(
      {},
      {
        input: { username: 'felipepxavier' },
      }
    );

    expect(usrData.name).toEqual(myInfo.name);
    expect(usrData.location).toEqual(myInfo.location);
  });

  it('should render default value if not exists value', async () => {
    const myInfo = {
      id: 10,
      name: 'Felipe Pedroso Xavier',
      location: null,
      email: null,
      description: 'não informado',
      svn_url: 'myUrl',
      visibility: 'public',
      language: 'Javascript',
    };
    api.get.mockResolvedValue({
      data: myInfo,
    });

    const usrData = await user(
      {},
      {
        input: { username: 'felipepxavier' },
      }
    );

    expect(usrData.email).toBe('Não cadastrado');
    expect(usrData.location).toBe('Não cadastrado');
  });
});
