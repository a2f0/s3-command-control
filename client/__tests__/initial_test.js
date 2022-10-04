const axios = require('axios');

it('should run', async () => {
  const response = await axios.post('http://localhost:1338/');
  console.info(response.status)
})
