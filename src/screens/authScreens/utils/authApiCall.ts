import axios from 'axios';
import {DB_NAME} from '../../../constants';
import {AUTH_URL} from '../../../constants/urls';

interface AuthApiCallProps {
  userName: string;
  password: string;
}

export const authApiCall = ({
  userName,
  password,
}: AuthApiCallProps) => {
  const headers = {'Content-type': 'application/json'};
  const data = {
    params: {
      login: userName,
      password: password,
      db: DB_NAME,
    },
  };

  return axios.post(AUTH_URL, data, {
    headers,
  });
};
