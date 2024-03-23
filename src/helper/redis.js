const {createClient} = require("redis");

const cacheClient = await createClient({
    url: 'redis://192.168.0.2:16379',
    database:1
}).on('error', err => console.log('Redis Client Error', err))
    .connect();

const  getCache = (key)=>{
    return cacheClient.get(key);
}

const setCache = (key,value)=>{
    cacheClient.set(key, value);
}

module.exports = {
    getCache,
    setCache
}