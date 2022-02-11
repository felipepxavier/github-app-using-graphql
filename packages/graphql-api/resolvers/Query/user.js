const api = require("../../services/api")

module.exports = {
    async user(_, { input: { username } }) {
      
        const responseInfo = await  api.get(`users/${username}`);
        const { name, email, location, avatar_url, company } = responseInfo.data;

        return {
            name, 
            email, 
            location,
            avatar_url, 
            company
        }
    }
}