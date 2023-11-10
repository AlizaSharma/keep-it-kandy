
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
// import { LOGIN_USER } from '../utils/mutations'; 

//import Auth from '../utils/auth'; NEED TO ADD THIS
const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

 
     return (
    <main className="flex-row justify-center mb-4 ">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
=======
import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Navbar from '../components/navbar.jsx'

function Signin() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div><Navbar />
        <h1>Sign-in</h1>
        <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
                <p>
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                </div>
        </div>
        </>
    );
}


export default Signin;

<section class="section ">
        <div class="columns">
          <div class="column is-two-fifths">
            <br />
            <h1  class="is-size-2">Login Up</H1>>Login</h1>
            <form class="login-form">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Username"
                    id="username-login"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    id="password-login"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button is-link" type="submit">
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>

        <div class="column is-two-fifths">
            <H1 class="is-size-2">Sign Up</H1>
          <br />
          <form class="signup-form">
          
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  id="username-signup"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  id="password-signup"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-link" type="submit">
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>
        </div>
      </section> 
</body>