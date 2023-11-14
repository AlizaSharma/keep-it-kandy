import { useState } from "react"
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

import Auth from '../utils/auth';
export default function SignUp() {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [createUser] = useMutation(CREATE_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const mutationResponse = await createUser({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.createUser.token;
            Auth.login(token);
        } catch (e) {
            console.log('error', e);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    return (
        <form className="signup-form" onSubmit={handleFormSubmit}>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    id="username-signup"
                    name="username"
                    onChange={handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    id="password-signup"
                    name="password"
                    onChange={handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-link" type="submit">
                    Create Account
                  </button>
                </p>
              </div>
            </form>
    )
}