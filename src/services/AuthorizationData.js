// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3YmE0NmY3LWFjNTktNGY3NS1iNDQ4LWQyMmIzYzkyMTJhNiIsIm5hbWUiOiJNYXJnZSBIYW1pbGwiLCJpYXQiOjE1MzI1MDQ2Nzl9.CxzfI0t6t2JTjf9Zlo8AUjpJW4u4YmfSOPB0uFKahx4';

class AuthData {

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3YmE0NmY3LWFjNTktNGY3NS1iNDQ4LWQyMmIzYzkyMTJhNiIsIm5hbWUiOiJNYXJnZSBIYW1pbGwiLCJpYXQiOjE1MzI1MDQ2Nzl9.CxzfI0t6t2JTjf9Zlo8AUjpJW4u4YmfSOPB0uFKahx4'; 

  /**
   * Return token value
   * @returns {string} token;
   */
  getToken() {
    return this.token;
  }

  /**
   * Set new token 
   * @param {string} newToken 
   */
  setToken(newToken) {
    this.token = newToken;
  }
}

export default AuthData;