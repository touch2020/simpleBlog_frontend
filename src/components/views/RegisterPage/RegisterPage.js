import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginUser, registerUser } from '../../../_actions/user_action'
import {useNavigate} from 'react-router-dom'

function RegisterPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if(Password !== ConfirmPassword){
            return alert('비빌번호가 다릅니다.')
        }

        const body = {
            username: Username,
            password: Password
        }

        dispatch(registerUser(body))
        .then(
            res => {
                console.log(res.value.status)
                if(res.value.status === 200){
                    navigate("/login")
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
                <label>UserName</label>
                <input type="Email" value={Username} onChange={onUsernameHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}></input>
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>
                <br></br>
                <button type="submit">
                    SignUp
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
