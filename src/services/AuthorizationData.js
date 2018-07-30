
class AuthData {

  token;
  tokenName = 'zoniToken';

  /**
   * Return token value
   * @returns {string} token;
   */
  getToken() {
    if (!this.token) this.token = this.getTokenFromLocalStorage();
    return this.token;
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