import react from 'react';
import axios from 'axios';

const url = 'http://localhost:3333/api';

export default function getUser() {
  axios
    .get(url)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
}
