const express = require('express')
const axios = require('axios').default
const client = require('./client')

const app = express()
const port = 9000

app.get('/', async (req, res) => {
    
    const catchValue = await client.get('todos');

    if (catchValue) return res.json(JSON.parse(catchValue));

    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
    );
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);
    return res.json(data)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))