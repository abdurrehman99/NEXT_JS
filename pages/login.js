import Layout from './components/Layout';
import axios from "axios";
import { useState } from "react";

const Login = () => {
    let initialState = { }
    const [ state,setState ] = useState(initialState);
    const loginUser = ()=>{
        axios.post('http://localhost:5000/users/login',state)
            .then( res=> console.log(res.data))
            .catch( err=> console.log(err));
    }

    const valueChange=(e)=>{
        setState({
            ...state , 
            [e.target.name] : e.target.value
        });
        // console.log(state);
    }
    return(
        <Layout>
            <div className=''>
                <h2>Login In</h2>
                <input name='username' onChange={ (e)=> valueChange(e) } className='w-25 form-control mb-2' placeholder='Username' />
                <input name='password' onChange={ (e)=> valueChange(e) } type = 'password' className='w-25 form-control mb-2' placeholder='Password' />
                <button onClick={ loginUser } className='btn btn-secondary'>Sign In</button>
            </div>
        </Layout>
    )
    }
export default Login;