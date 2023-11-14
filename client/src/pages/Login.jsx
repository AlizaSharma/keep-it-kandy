import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

function Login() {
  


  return (
    <>

      <section className="section">
        <div className="columns">
          <div className="column is-two-fifths">
            <SignIn />
           
          </div>
          <div className="column is-two-fifths">
            <SignUp />
          </div>
        </div>
      </section>

    </>
  );
}


export default Login;


