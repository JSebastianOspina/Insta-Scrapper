const axios = require('axios');

const getUserInfo = async (username) => {
    let response;
    try {
        response = await axios.get(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`, {
            headers: {
                "X-Ig-App-Id": "936619743392459",
            }
        });
        return response.data;

    } catch (e) {
        console.log(e)
    }
    return null;
}

module.exports = { getUserInfo };