//import axios from 'axios';

export const getCards = async () => {
  //axios.defaults.baseURL = `http://localhost:4000/`;
  //axios.defaults.baseURL = `https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e`;
  let url = `https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e`;
  //const response = await axios.get(`${axios.defaults.baseURL}`);
  const response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    return response.status;
  }
  // return response.data;
};

export const postContact = async item => {
  try {
    const response = await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(item),
    });
    //const response = await axios.post('http://localhost:4000/', item);
    console.log('👉 Returned data:', response.ok);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};
