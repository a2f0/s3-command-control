const axios = require('axios');

it('should run', async () => {
  const response = await axios.post('http://localhost:1338/');
  expect(response.status).toBe(201)
})
