const { user } = require('./user');

describe('user()', () => {
  it('should call correctly', async () => {
    const myInfo = {
      name: 'Felipe Pedroso Xavier',
      location: 'Gravataí - RS',
    };

    const usrData = await user(
      {},
      {
        input: { username: 'felipepxavier' },
      }
    );

    expect(usrData.name).toEqual(myInfo.name);
    expect(usrData.location).toEqual(myInfo.location);
  });
});
