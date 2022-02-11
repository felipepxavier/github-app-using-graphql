const api = require('../../services/api');

module.exports = {
  async userRepositories(_, { input: { username } }) {
    const responseInfo = await api.get(`users/${username}/repos`);
    const repositiesData = responseInfo.data;

    const setColorLanguage = (language) => {
      const color = {
        javascript: '#e9d250',
        typescript: '#0076c6',
        python: '#356fa0',
        java: '#e42e2e',
        go: '#00a8d1',
        php: '#52628f',
        default: '#d2691e',
      };
      return color[language?.toLowerCase()] || color.default;
    };

    const formatData = repositiesData.map(
      ({ id, name, description, svn_url: url, visibility, language }) => ({
        id,
        name,
        description: description || 'não informado',
        url,
        visibility,
        language: {
          name: language,
          color: setColorLanguage(language),
        },
      })
    );

    return {
      repositories: formatData,
      total: formatData.length,
    };
  },
};
