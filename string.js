const client = require("./client.js")

async function init(){
    // await client.set("user:5","Ankit")
    await client.expire("user:5",5)
const result = await client.get("user:5")
console.log(result)
}

init()