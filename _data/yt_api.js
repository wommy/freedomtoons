const axios = require('axios');

require('dotenv').config();

let url = `\
https://www.googleapis.com/youtube/v3/playlistItems\
?playlistId=UURXnOs1rjfLMYrtZ-0n29NA\
&key=${process.env.YTAPI_KEY}\
&maxResults=30\
&part=snippet\
`

module.exports = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
