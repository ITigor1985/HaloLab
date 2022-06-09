import axios from 'axios';

export const getCards = async () => {
  axios.defaults.baseURL = `http://localhost:4000/`;
  //axios.defaults.baseURL = `https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e`;
  const response = await axios.get(`${axios.defaults.baseURL}`);
  return response.data;
};

export const postContact = async item => {
  try {
    const response = await axios.post('http://localhost:4000/', item);
    console.log('👉 Returned data:', response);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};
