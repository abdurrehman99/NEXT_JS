import Layout from "./components/Layout";
import { useState } from "react";
import { setUser } from './action/authActions';
import { connect } from 'react-redux'
const Login = (props) => {
  let initialState = {};
  const [state, setState] = useState(initialState);
  const loginUser = () => {
    
    props.setUser(state);
  };

  const valueChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    // console.log(state);
  };
  return (
    <Layout>
      <div className="">
        <h2>Login In</h2>
        <form>
        <input
          name="username"
          onChange={e => valueChange(e)}
          className="w-25 form-control mb-2"
          placeholder="Username"
        />
        <input
          name="password"
          onChange={e => valueChange(e)}
          type="password"
          className="w-25 form-control mb-2"
          placeholder="Password"
        />
        </form>
        <button onClick={loginUser} className="btn btn-secondary">
          Sign In
        </button>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  auth : state.auth,
})

export default connect(mapStateToProps ,{ setUser })(Login);
