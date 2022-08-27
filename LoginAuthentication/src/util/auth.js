import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = 'AIzaSyBVFQOJtPbKCX-sgqVL2oW8Kg_HsSRByoU';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log('first', response.data.refreshToken);

  return response.data;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}
export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}

// const reftoken = async () => {
//   return await AsyncStorage.getItem('reftoken');
// };

// export async function getNewToken() {
//   const token = await reftoken();
//   const url = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;
//   const response = await axios.post(
//     url,
//     `grant_type=refresh_token&refresh_token=${token}`,
//   );
// }

// Fetching a new access token before it expires will result
// in the same access token.

// AOEOulY7an9RvBQJqrwiQ2taQMlP493P1fPeUvV3UTux6HBe9JRHGid0Oms292ytbJgRxcA-FAu7QPcYnCdBx7F3d9djEMImiaZh6oKBd9Ycw5DEhW4rA3hFSmv89K3Yd9oXjH-_KU-x1nQhmvzz7kqqB09Cun1fmIXfEHDMAls5ydaf3TipZpw3gz0486ElMwr0h0CSz9GThksSwqeTaAK_U63T-jL28A
