import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEquipmentData  = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/authentication.json`)
    .then((response) => {
      const demEquips = response.data;
      const equips = [];
      Object.keys(demEquips).forEach((fbId) => {
        demEquips[fbId].id = fbId;
        equips.push(demEquips[fbId]);
      });
    })
    .catch((error) => reject(error));
});

export default { getEquipmentData };