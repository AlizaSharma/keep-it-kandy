// decoding the token to get the user's information 
import decode from 'jwt-decode';

class AuthService {
  // get user data from JSON web token by decoding it
  getUser() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage and reloads the application
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
