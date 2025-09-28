const client = require("./client.js")
async function init(){
     await client.lpush("user","Aryan")
     await client.lpush("user","Avni")
     await client.lpush("user","Shailesh")
     await client.lpush("user","Kamlesh")
     await client.lpush("user","Ankit")

const result = await client.rpop("user")
    console.log(result)
}
init()