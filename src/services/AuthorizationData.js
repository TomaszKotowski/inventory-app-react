
class AuthData {

  token;

  /**
   * Return token value
   * @returns {string} token;
   */
  getToken() {
    if(this.token) {
      return this.token;
    }

    const tokenFromStorage = this.getTokenFromLocalStorage();
    if(tokenFromStorage) {
      return tokenFromStorage;
    }

    return '';
  }

  /**
   * Set new token 
   * @param {string} newToken 
   */
  setToken(newToken) {
    this.token = newToken;
    this.setTokenInLocalStorage(newToken);
  }

  setTokenInLocalStorage(token) {
    localStorage.setItem(this.tokenName, token);
  }

  getTokenFromLocalStorage() {
    return localStorage.getItem(this.tokenName);
  }

}

export default new AuthData();