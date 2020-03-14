import Layout from './components/Layout';
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
    let initialState = { }
    const [ state,setState ] = useState(initialState);
    const registerUser = ()=>{
        axios.post('http://localhost:5000/users/register',state)
            .then( res=> console.log(res.data))
            .catch( err=> console.log(err));
    }

    const valueChange=(e)=>{
        setState({
            ...state , 
            [e.target.name] : e.target.value
        });
        console.log(state);
    }
    return <Layout>
            <div className=''>
                <h2>Sign Up</h2>
                <input name='username' onChange={ (e)=> valueChange(e) } className='w-25 form-control mb-2' placeholder='Username' />
                <input name='password' onChange={ (e)=> valueChange(e) } className='w-25 form-control mb-2' placeholder='Password' />
                <button onClick={ registerUser } className='btn btn-secondary'>Register</button>
            </div>
        </Layout>
}
export default SignUp;