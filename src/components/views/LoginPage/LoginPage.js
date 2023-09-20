import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
import {useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { getCookie, setCookie } from '../../../utils/cookie'
import Cookies from 'js-cookie'
import axios, { Axios } from 'axios'



function LoginPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [cookies, removeCookie] = useCookies(['access_token']);

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const body = {
            username: Email,
            password: Password
        }

        dispatch(loginUser(body))
        .then(
            res => {
                console.log("cookie:",res.action.payload)
                if(res.value.message === 'success'){
                    axios.defaults.headers.common['Authorization'] = `Bearer ${res.value.access_token}`
                    navigate("/")
                } else {
                    alert('Error')
                }
            }
        )
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}></input>
                <br></br>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
