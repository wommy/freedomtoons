const axios = require('axios');

require('dotenv').config();

module.exports = async function() {
  let url = `https://www.googleapis.com/youtube/v3/playlistItems?`
  url += `playlistId=UURXnOs1rjfLMYrtZ-0n29NA&part=snippet&maxResults=15`
  url += `&key=${process.env.YTAPI_KEY}`
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}