const api = require('../../services/api');

module.exports = {
  async user(_, { input: { username } }) {
    const responseInfo = await api.get(`users/${username}`);
    const {
      name,
      email,
      location,
      avatar_url,
      company,
      login,
      public_repos,
      bio,
      followers,
      following,
    } = responseInfo.data;

    return {
      name,
      email: email || 'Não cadastrado',
      location: location || 'Não cadastrado',
      avatar_url,
      company,
      username: login,
      public_repos,
      bio,
      followers,
      following,
    };
  },
};
