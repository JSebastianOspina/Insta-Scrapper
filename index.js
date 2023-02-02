const express = require('express');
const { getUserInfo } = require('./scrapper');

const app = express()
const PORT = process.env.PORT || 3030;


app.get('/getUser', async (req, res) => {
    const userInfo = await getUserInfo(req.query.user);
    res.send(`<pre id='json'>${JSON.stringify(userInfo, null, 2)}</pre>`);
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})