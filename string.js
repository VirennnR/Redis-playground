const client = require('./client')

async function init() {
    await client.set('msg:4', 'Hey from Nodejs')

    await client.expire("msg:4", 10);
    // const result = await client.get('user:1');
    //const result = await client.get('msg:4');
    //console.log("Result -> ", result);
}

init();