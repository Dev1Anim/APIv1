import { createClient } from 'redis';

const redisClient = createClient({
    url: 'redis://default:Yjx6muVQFwvo56v2HsSHyKxCtS9erAa8TTnzRyIcnvAByrOqORS2QqGysW42GLD1@167.172.75.221:5432/0' // Adjust the URL as needed
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
    await redisClient.connect();
})();

export { redisClient as redis };