const app = require('express')();

const {getUserInfo} = require('../scrapper');

app.get('api/getUser', async (req, res) => {
    const userInfo = await getUserInfo(req.query.user);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(userInfo));
})
