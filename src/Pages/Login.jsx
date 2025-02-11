import React from 'react'
import useStore from '../store/store';
function Login() {
    const {toggle,handle}=useStore()
    const submit=()=>{
        toggle();
    }
    return (
        <div>
            <label>UserName:<input type='text' onChange={handle}/></label><br />
            <label>password:<input type='Password'/></label>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default Login
