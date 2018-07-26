class LocalStorage {

  /**
  * Saving token in user local storage
  * @param {string} token 
  */
  saveInLocalStorage (token) {
    localStorage.setItem('zoniToken', token);
  }

  /**
  * Returning zonifero token form local storage;
  * @returns {string} token
  */
  getTokenFromLocalStorage() {
    return localStorage.getItem('zoniToken');
  }

  /**
  * Verifies that the user is logged in.
  * @returns {boolean} loginStatus
  */
  checkIfTokenExist() {
    if (getTokenFromLocalStorage()) {
      return true;
    } else {
      return false;
    }
  }
}

export default new LocalStorage();