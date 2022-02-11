const api = require('../../services/api');
const { userRepositories } = require('./userRepositories');

jest.mock('../../services/api', () => ({
  get: jest.fn(),
}));

describe('userRepositories()', () => {
  it('should resolve correctly language color', async () => {
    api.get.mockResolvedValue({
      data: [
        {
          id: 10,
          name: 'felipe',
          description: 'não informado',
          svn_url: 'myUrl',
          visibility: 'public',
          language: 'Javascript',
        },
      ],
    });
    const reposData = await userRepositories(
      {},
      {
        input: { username: 'felipepxavier' },
      }
    );

    expect(reposData.repositories[0].language).toEqual({
      color: '#e9d250',
      name: 'Javascript',
    });
    expect(reposData.total).toBe(1);
  });
});
