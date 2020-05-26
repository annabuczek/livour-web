import axios from 'axios';

const USER_ID = 17841402110928758;

const api = axios.create({
  baseURL: 'https://graph.instagram.com/',
});

export const fetchPhotoIds = async () => {
  const response = await api.get(`${USER_ID}`, {
    params: {
      fields: 'id,username,media',
      access_token: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
    },
  });
  return response.data.media.data.slice(0, 8);
};

export const fetchPhoto = async (id) => {
  const response = await api.get(`${id}`, {
    params: {
      fields: 'caption,media_url',
      access_token: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
    },
  });
  return response.data;
};
