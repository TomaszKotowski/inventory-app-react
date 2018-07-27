import * as axios from 'axios';
import AuthData from './AuthorizationData';

/*
------------
NOTES
------------

/api/users - CRUD + json-server extensions
/api/devices - CRUD + json-server extensions, additional query param `search` for search deep
/api/offices - CRUD + json-server extensions
/api/places - CRUD + json-server extensions
/api/identify/{id} - only GET, accept params: id
/api/users/current - get user data checking his token
*/

const client = axios.create({
  baseURL: 'http://185.238.72.22:3400',
  headers: {
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3YmE0NmY3LWFjNTktNGY3NS1iNDQ4LWQyMmIzYzkyMTJhNiIsIm5hbWUiOiJNYXJnZSBIYW1pbGwiLCJpYXQiOjE1MzI1MDQ2Nzl9.CxzfI0t6t2JTjf9Zlo8AUjpJW4u4YmfSOPB0uFKahx4'
  }
});

export default client;
