  
const redis = require('redis')

const redisClient = redis.createClient({
    port:  6379,
    host:  "redis"
})

module.exports = redisClient;